import { parseLocalLibrary, type LocalLibrary } from './library';
import type { StartPageSettings } from './settings';

export type SpaceSettingsSubset = Pick<StartPageSettings, 'defaultSpaceId' | 'reopenBehavior'>;

export type DeleteSpaceRequest = {
  spaceId: string;
  confirmationName: string;
  destinationSpaceId?: string;
};

export function createSpace(library: LocalLibrary, name: string): LocalLibrary {
  const nextName = normalizeSpaceName(name);
  assertUniqueSpaceName(library, nextName);

  const nextId = `space-${Math.max(0, ...library.spaces.map((space) => Number(space.id.replace('space-', '')) || 0)) + 1}`;

  return parseLocalLibrary({
    ...library,
    activeSpaceId: nextId,
    spaces: [...library.spaces, { id: nextId, name: nextName, dials: [] }]
  });
}

export function renameSpace(library: LocalLibrary, spaceId: string, name: string): LocalLibrary {
  const nextName = normalizeSpaceName(name);
  assertUniqueSpaceName(library, nextName, spaceId);

  return parseLocalLibrary({
    ...library,
    spaces: library.spaces.map((space) => (space.id === spaceId ? { ...space, name: nextName } : space))
  });
}

export function setDefaultSpace(settings: SpaceSettingsSubset, spaceId: string): SpaceSettingsSubset {
  return {
    ...settings,
    defaultSpaceId: spaceId,
    reopenBehavior: 'default-space'
  };
}

export function resolveStartupSpaceId(library: LocalLibrary, settings: SpaceSettingsSubset): string {
  if (
    settings.reopenBehavior === 'default-space' &&
    settings.defaultSpaceId &&
    library.spaces.some((space) => space.id === settings.defaultSpaceId)
  ) {
    return settings.defaultSpaceId;
  }

  if (library.spaces.some((space) => space.id === library.activeSpaceId)) {
    return library.activeSpaceId;
  }

  return library.spaces[0]?.id ?? '';
}

export function deleteSpace(library: LocalLibrary, request: DeleteSpaceRequest): LocalLibrary {
  if (library.spaces.length === 1) {
    throw new Error('A Library must always keep at least one Space.');
  }

  const spaceToDelete = library.spaces.find((space) => space.id === request.spaceId);

  if (!spaceToDelete) {
    throw new Error('Space not found.');
  }

  if (request.confirmationName.trim() !== spaceToDelete.name) {
    throw new Error('Type the Space name to confirm deletion.');
  }

  const hasDials = spaceToDelete.dials.length > 0;

  if (hasDials && !request.destinationSpaceId) {
    throw new Error('Choose a destination Space for existing Dials.');
  }

  if (request.destinationSpaceId === request.spaceId) {
    throw new Error('Choose a different destination Space.');
  }

  return parseLocalLibrary({
    ...library,
    activeSpaceId:
      library.activeSpaceId === request.spaceId
        ? request.destinationSpaceId ?? library.spaces.find((space) => space.id !== request.spaceId)?.id
        : library.activeSpaceId,
    spaces: library.spaces
      .filter((space) => space.id !== request.spaceId)
      .map((space) =>
        hasDials && space.id === request.destinationSpaceId
          ? { ...space, dials: [...space.dials, ...spaceToDelete.dials] }
          : space
      )
  });
}

export function selectActiveSpace(library: LocalLibrary, spaceId: string): LocalLibrary {
  if (!library.spaces.some((space) => space.id === spaceId)) {
    throw new Error('Space not found.');
  }

  return parseLocalLibrary({
    ...library,
    activeSpaceId: spaceId
  });
}

function normalizeSpaceName(name: string): string {
  const trimmed = name.trim();

  if (!trimmed) {
    throw new Error('Space name is required.');
  }

  return trimmed;
}

function assertUniqueSpaceName(library: LocalLibrary, candidate: string, ignoredSpaceId?: string): void {
  const duplicate = library.spaces.some(
    (space) => space.name.toLocaleLowerCase() === candidate.toLocaleLowerCase() && space.id !== ignoredSpaceId
  );

  if (duplicate) {
    throw new Error('Space names must be unique.');
  }
}
