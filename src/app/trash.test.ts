import { describe, expect, it } from 'vitest';
import {
  deleteDialToTrash,
  getTrashDialSummaries,
  permanentlyDeleteTrashDial,
  purgeExpiredTrash,
  purgeTrash,
  restoreDialFromTrash,
  restoreMostRecentDialFromSpace,
  TRASH_UNDO_WINDOW_MS
} from './trash';

const sampleLibrary = {
  version: 1 as const,
  activeSpaceId: 'space-1',
  spaces: [
    {
      id: 'space-1',
      name: 'Home',
      dials: [
        { id: 'dial-1', title: 'Docs', url: 'https://docs.example.com/' },
        { id: 'dial-2', title: 'GitHub', url: 'https://github.com/' }
      ]
    },
    {
      id: 'space-2',
      name: 'Work',
      dials: [{ id: 'dial-3', title: 'Linear', url: 'https://linear.app/' }]
    }
  ]
};

describe('deleteDialToTrash', () => {
  it('moves a Dial out of its Space and records original placement metadata', () => {
    const nextLibrary = deleteDialToTrash(sampleLibrary, 'dial-2', '2026-05-04T12:00:00.000Z');

    expect(nextLibrary.spaces[0]?.dials.map((dial) => dial.id)).toEqual(['dial-1']);
    expect(nextLibrary.trash?.[0]).toMatchObject({
      dial: { id: 'dial-2', title: 'GitHub', url: 'https://github.com/' },
      originalSpaceId: 'space-1',
      originalDialIndex: 1,
      deletedAt: '2026-05-04T12:00:00.000Z'
    });
  });
});

describe('restoreDialFromTrash', () => {
  it('restores a trashed Dial to its original Space identity and original position', () => {
    const deletedLibrary = deleteDialToTrash(sampleLibrary, 'dial-1', '2026-05-04T12:00:00.000Z');
    const restoredLibrary = restoreDialFromTrash(deletedLibrary, 'dial-1');

    expect(restoredLibrary.spaces[0]?.dials.map((dial) => dial.id)).toEqual(['dial-1', 'dial-2']);
    expect(restoredLibrary.trash ?? []).toHaveLength(0);
  });

  it('restores as close as possible when the original Space still exists but its order changed', () => {
    const deletedLibrary = deleteDialToTrash(sampleLibrary, 'dial-2', '2026-05-04T12:00:00.000Z');
    const compactedLibrary = {
      ...deletedLibrary,
      spaces: [
        {
          id: 'space-1',
          name: 'Home',
          dials: []
        },
        deletedLibrary.spaces[1]
      ]
    };

    const restoredLibrary = restoreDialFromTrash(compactedLibrary, 'dial-2');

    expect(restoredLibrary.spaces[0]?.dials.map((dial) => dial.id)).toEqual(['dial-2']);
  });
});

describe('restoreMostRecentDialFromSpace', () => {
  it('restores the most recently deleted Dial from the current Space within the undo window', () => {
    const onceDeleted = deleteDialToTrash(sampleLibrary, 'dial-1', '2026-05-04T12:00:00.000Z');
    const twiceDeleted = deleteDialToTrash(onceDeleted, 'dial-2', '2026-05-04T12:05:00.000Z');
    const restoredLibrary = restoreMostRecentDialFromSpace(
      twiceDeleted,
      'space-1',
      new Date('2026-05-04T12:30:00.000Z')
    );

    expect(restoredLibrary.spaces[0]?.dials.map((dial) => dial.id)).toEqual(['dial-2']);
    expect(restoredLibrary.trash?.map((entry) => entry.dial.id)).toEqual(['dial-1']);
  });

  it('does nothing when the undo window expired', () => {
    const deletedLibrary = deleteDialToTrash(sampleLibrary, 'dial-1', '2026-05-04T12:00:00.000Z');
    const restoredLibrary = restoreMostRecentDialFromSpace(
      deletedLibrary,
      'space-1',
      new Date('2026-05-04T13:00:00.001Z')
    );

    expect(restoredLibrary).toEqual(deletedLibrary);
  });
});

describe('permanentlyDeleteTrashDial', () => {
  it('removes one trashed Dial without touching active Spaces', () => {
    const deletedLibrary = deleteDialToTrash(sampleLibrary, 'dial-1', '2026-05-04T12:00:00.000Z');
    const trimmedLibrary = permanentlyDeleteTrashDial(deletedLibrary, 'dial-1');

    expect(trimmedLibrary.trash ?? []).toHaveLength(0);
    expect(trimmedLibrary.spaces[1]?.dials.map((dial) => dial.id)).toEqual(['dial-3']);
  });
});

describe('purgeTrash', () => {
  it('clears every trashed Dial in one bulk action', () => {
    const onceDeleted = deleteDialToTrash(sampleLibrary, 'dial-1', '2026-05-04T12:00:00.000Z');
    const twiceDeleted = deleteDialToTrash(onceDeleted, 'dial-2', '2026-05-04T12:05:00.000Z');

    expect(purgeTrash(twiceDeleted).trash ?? []).toHaveLength(0);
  });
});

describe('purgeExpiredTrash', () => {
  it('removes only entries older than the configured retention window', () => {
    const onceDeleted = deleteDialToTrash(sampleLibrary, 'dial-1', '2026-05-04T12:00:00.000Z');
    const twiceDeleted = deleteDialToTrash(onceDeleted, 'dial-2', '2026-05-04T12:30:00.000Z');
    const retainedLibrary = purgeExpiredTrash(twiceDeleted, new Date('2026-05-04T13:00:00.000Z'), 45 * 60 * 1000);

    expect(retainedLibrary.trash?.map((entry) => entry.dial.id)).toEqual(['dial-2']);
  });
});

describe('getTrashDialSummaries', () => {
  it('reports the original Space and deletion time for Trash UI rendering', () => {
    const deletedLibrary = deleteDialToTrash(sampleLibrary, 'dial-1', '2026-05-04T12:00:00.000Z');

    expect(getTrashDialSummaries(deletedLibrary)).toEqual([
      {
        dialId: 'dial-1',
        title: 'Docs',
        url: 'https://docs.example.com/',
        originalSpaceId: 'space-1',
        originalSpaceName: 'Home',
        deletedAt: '2026-05-04T12:00:00.000Z'
      }
    ]);
  });
});

it('keeps the per-Space undo window at 60 minutes', () => {
  expect(TRASH_UNDO_WINDOW_MS).toBe(60 * 60 * 1000);
});
