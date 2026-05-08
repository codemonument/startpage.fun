import { describe, expect, it } from 'vitest';
import { partitionSpacesForBar, resolveSpaceBarRowCap } from './space-bar';

const spaces = [
  { id: 'space-1', name: 'Home' },
  { id: 'space-2', name: 'Work' },
  { id: 'space-3', name: 'Ideas' },
  { id: 'space-4', name: 'Play' },
  { id: 'space-5', name: 'Travel' },
  { id: 'space-6', name: 'Reading' },
  { id: 'space-7', name: 'Archive' }
];

describe('resolveSpaceBarRowCap', () => {
  it('forces overflow menu mode to a single visible row', () => {
    expect(resolveSpaceBarRowCap('menu', 4)).toBe(1);
  });

  it('keeps the configured row cap for multi-row mode', () => {
    expect(resolveSpaceBarRowCap('multi-row', 3)).toBe(3);
  });

  it('treats scroll mode as unlimited rows', () => {
    expect(resolveSpaceBarRowCap('scroll', 2)).toBe(Number.POSITIVE_INFINITY);
  });
});

describe('partitionSpacesForBar', () => {
  it('keeps every Space visible in scroll mode', () => {
    const layout = partitionSpacesForBar({
      spaces,
      mode: 'scroll',
      rowCap: 2,
      spacesPerRow: 3
    });

    expect(layout.visibleSpaces.map((space) => space.id)).toEqual(spaces.map((space) => space.id));
    expect(layout.overflowSpaces).toEqual([]);
  });

  it('pushes excess Spaces into overflow in menu mode', () => {
    const layout = partitionSpacesForBar({
      spaces,
      mode: 'menu',
      rowCap: 4,
      spacesPerRow: 3
    });

    expect(layout.visibleSpaces.map((space) => space.id)).toEqual(['space-1', 'space-2', 'space-3']);
    expect(layout.overflowSpaces.map((space) => space.id)).toEqual([
      'space-4',
      'space-5',
      'space-6',
      'space-7'
    ]);
  });

  it('uses the configured row cap in multi-row mode before overflowing', () => {
    const layout = partitionSpacesForBar({
      spaces,
      mode: 'multi-row',
      rowCap: 2,
      spacesPerRow: 3
    });

    expect(layout.visibleSpaces.map((space) => space.id)).toEqual([
      'space-1',
      'space-2',
      'space-3',
      'space-4',
      'space-5',
      'space-6'
    ]);
    expect(layout.overflowSpaces.map((space) => space.id)).toEqual(['space-7']);
  });

  it('clamps row caps below one to a single visible row', () => {
    const layout = partitionSpacesForBar({
      spaces,
      mode: 'multi-row',
      rowCap: 0,
      spacesPerRow: 2
    });

    expect(layout.visibleSpaces.map((space) => space.id)).toEqual(['space-1', 'space-2']);
    expect(layout.overflowSpaces.map((space) => space.id)).toEqual([
      'space-3',
      'space-4',
      'space-5',
      'space-6',
      'space-7'
    ]);
  });
});
