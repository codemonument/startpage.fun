import { describe, expect, it } from 'vitest';
import {
  createSpace,
  deleteSpace,
  renameSpace,
  resolveStartupSpaceId,
  setDefaultSpace
} from './spaces';

const sampleLibrary = {
  version: 1 as const,
  activeSpaceId: 'space-1',
  spaces: [
    {
      id: 'space-1',
      name: 'Home',
      dials: [{ id: 'dial-1', title: 'GitHub', url: 'https://github.com/' }]
    },
    {
      id: 'space-2',
      name: 'Work',
      dials: []
    }
  ]
};

describe('createSpace', () => {
  it('adds a uniquely named empty Space and makes it active', () => {
    const nextLibrary = createSpace(sampleLibrary, 'Ideas');

    expect(nextLibrary.activeSpaceId).toBe('space-3');
    expect(nextLibrary.spaces.at(-1)).toMatchObject({
      id: 'space-3',
      name: 'Ideas',
      dials: []
    });
  });

  it('rejects duplicate Space names', () => {
    expect(() => createSpace(sampleLibrary, 'Home')).toThrow('Space names must be unique.');
  });
});

describe('renameSpace', () => {
  it('renames a Space when the target name is still unique', () => {
    expect(renameSpace(sampleLibrary, 'space-2', 'Projects').spaces[1]?.name).toBe('Projects');
  });

  it('rejects renaming a Space to another existing name', () => {
    expect(() => renameSpace(sampleLibrary, 'space-2', 'Home')).toThrow('Space names must be unique.');
  });
});

describe('setDefaultSpace', () => {
  it('stores the chosen default Space and switches startup behavior to default-space', () => {
    expect(setDefaultSpace({ defaultSpaceId: null, reopenBehavior: 'last-active-space' }, 'space-2')).toEqual({
      defaultSpaceId: 'space-2',
      reopenBehavior: 'default-space'
    });
  });
});

describe('deleteSpace', () => {
  it('prevents deleting the last remaining Space', () => {
    expect(() =>
      deleteSpace(
        {
          version: 1,
          activeSpaceId: 'space-1',
          spaces: [{ id: 'space-1', name: 'Home', dials: [] }]
        },
        { spaceId: 'space-1', confirmationName: 'Home' }
      )
    ).toThrow('A Library must always keep at least one Space.');
  });

  it('requires a matching confirmation name before deleting a non-empty Space', () => {
    expect(() => deleteSpace(sampleLibrary, { spaceId: 'space-1', confirmationName: 'Nope' })).toThrow(
      'Type the Space name to confirm deletion.'
    );
  });

  it('moves Dials into another Space when deleting a non-empty Space', () => {
    const nextLibrary = deleteSpace(sampleLibrary, {
      spaceId: 'space-1',
      confirmationName: 'Home',
      destinationSpaceId: 'space-2'
    });

    expect(nextLibrary.spaces).toHaveLength(1);
    expect(nextLibrary.spaces[0]).toMatchObject({
      id: 'space-2',
      dials: [{ title: 'GitHub', url: 'https://github.com/' }]
    });
  });
});

describe('resolveStartupSpaceId', () => {
  it('reopens the default Space when startup behavior is set to default-space', () => {
    expect(
      resolveStartupSpaceId(sampleLibrary, {
        defaultSpaceId: 'space-2',
        reopenBehavior: 'default-space'
      })
    ).toBe('space-2');
  });

  it('falls back to the active Space when the configured default was deleted', () => {
    expect(
      resolveStartupSpaceId(sampleLibrary, {
        defaultSpaceId: 'space-9',
        reopenBehavior: 'default-space'
      })
    ).toBe('space-1');
  });
});
