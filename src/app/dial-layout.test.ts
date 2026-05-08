import { describe, expect, it } from 'vitest';
import { moveDialWithinSpace, shouldShowAddTile } from './dial-layout';

const sampleLibrary = {
  version: 1 as const,
  activeSpaceId: 'space-1',
  spaces: [
    {
      id: 'space-1',
      name: 'Home',
      dials: [
        { id: 'dial-1', title: 'Docs', url: 'https://docs.example.com/' },
        { id: 'dial-2', title: 'GitHub', url: 'https://github.com/' },
        { id: 'dial-3', title: 'Linear', url: 'https://linear.app/' }
      ]
    }
  ]
};

describe('moveDialWithinSpace', () => {
  it('moves a Dial earlier in its current Space order', () => {
    const nextLibrary = moveDialWithinSpace(sampleLibrary, 'dial-3', 'earlier');

    expect(nextLibrary.spaces[0]?.dials.map((dial) => dial.id)).toEqual(['dial-1', 'dial-3', 'dial-2']);
  });

  it('moves a Dial later in its current Space order', () => {
    const nextLibrary = moveDialWithinSpace(sampleLibrary, 'dial-1', 'later');

    expect(nextLibrary.spaces[0]?.dials.map((dial) => dial.id)).toEqual(['dial-2', 'dial-1', 'dial-3']);
  });

  it('keeps the order stable when a Dial is already at the edge', () => {
    const nextLibrary = moveDialWithinSpace(sampleLibrary, 'dial-1', 'earlier');

    expect(nextLibrary).toEqual(sampleLibrary);
  });
});

describe('shouldShowAddTile', () => {
  it('shows the Add Tile in every Space when visibility is always', () => {
    expect(shouldShowAddTile({ addTileVisibility: 'always' }, 3)).toBe(true);
  });

  it('shows the Add Tile only on empty Spaces when configured that way', () => {
    expect(shouldShowAddTile({ addTileVisibility: 'empty-only' }, 0)).toBe(true);
    expect(shouldShowAddTile({ addTileVisibility: 'empty-only' }, 2)).toBe(false);
  });
});
