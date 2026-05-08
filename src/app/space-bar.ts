export type SpaceBarMode = 'multi-row' | 'scroll' | 'menu';

export type SpaceBarSpace = {
  id: string;
  name: string;
};

export type SpaceBarLayout = {
  visibleSpaces: SpaceBarSpace[];
  overflowSpaces: SpaceBarSpace[];
};

export function resolveSpaceBarRowCap(mode: SpaceBarMode, configuredRowCap: number): number {
  if (mode === 'scroll') {
    return Number.POSITIVE_INFINITY;
  }

  if (mode === 'menu') {
    return 1;
  }

  return Math.max(1, Math.floor(configuredRowCap));
}

export function partitionSpacesForBar(input: {
  spaces: SpaceBarSpace[];
  mode: SpaceBarMode;
  rowCap: number;
  spacesPerRow: number;
}): SpaceBarLayout {
  const effectiveRowCap = resolveSpaceBarRowCap(input.mode, input.rowCap);

  if (!Number.isFinite(effectiveRowCap)) {
    return {
      visibleSpaces: input.spaces,
      overflowSpaces: []
    };
  }

  const perRow = Math.max(1, Math.floor(input.spacesPerRow));
  const visibleLimit = perRow * effectiveRowCap;

  return {
    visibleSpaces: input.spaces.slice(0, visibleLimit),
    overflowSpaces: input.spaces.slice(visibleLimit)
  };
}
