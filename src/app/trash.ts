import { parseLocalLibrary, type LocalLibrary, type TrashedDial } from './library';

export const TRASH_UNDO_WINDOW_MS = 60 * 60 * 1000;

export function deleteDialToTrash(
  library: LocalLibrary,
  dialId: string,
  deletedAt: string = new Date().toISOString()
): LocalLibrary {
  const located = findDial(library, dialId);

  if (!located) {
    throw new Error('Dial not found.');
  }

  const trashEntry: TrashedDial = {
    dial: located.dial,
    originalSpaceId: located.space.id,
    originalSpaceName: located.space.name,
    originalDialIndex: located.index,
    deletedAt
  };

  return parseLocalLibrary({
    ...library,
    spaces: library.spaces.map((space) =>
      space.id === located.space.id
        ? {
            ...space,
            dials: space.dials.filter((dial) => dial.id !== dialId)
          }
        : space
    ),
    trash: [...(library.trash ?? []), trashEntry]
  });
}

export function restoreDialFromTrash(library: LocalLibrary, dialId: string): LocalLibrary {
  const trashEntry = (library.trash ?? []).find((entry) => entry.dial.id === dialId);

  if (!trashEntry) {
    throw new Error('Trashed Dial not found.');
  }

  return parseLocalLibrary({
    ...library,
    spaces: library.spaces.map((space) => {
      if (space.id !== trashEntry.originalSpaceId) {
        return space;
      }

      const insertIndex = Math.min(trashEntry.originalDialIndex, space.dials.length);
      const nextDials = [...space.dials];
      nextDials.splice(insertIndex, 0, trashEntry.dial);

      return {
        ...space,
        dials: nextDials
      };
    }),
    trash: (library.trash ?? []).filter((entry) => entry.dial.id !== dialId)
  });
}

export function restoreMostRecentDialFromSpace(
  library: LocalLibrary,
  spaceId: string,
  now: Date,
  undoWindowMs: number = TRASH_UNDO_WINDOW_MS
): LocalLibrary {
  const candidates = (library.trash ?? [])
    .filter((entry) => entry.originalSpaceId === spaceId)
    .filter((entry) => now.getTime() - new Date(entry.deletedAt).getTime() <= undoWindowMs)
    .sort((left, right) => new Date(right.deletedAt).getTime() - new Date(left.deletedAt).getTime());

  const mostRecent = candidates[0];

  if (!mostRecent) {
    return library;
  }

  return restoreDialFromTrash(library, mostRecent.dial.id);
}

export function permanentlyDeleteTrashDial(library: LocalLibrary, dialId: string): LocalLibrary {
  return parseLocalLibrary({
    ...library,
    trash: (library.trash ?? []).filter((entry) => entry.dial.id !== dialId)
  });
}

export function purgeTrash(library: LocalLibrary): LocalLibrary {
  return parseLocalLibrary({
    ...library,
    trash: []
  });
}

export function purgeExpiredTrash(
  library: LocalLibrary,
  now: Date,
  retentionMs: number | null
): LocalLibrary {
  if (retentionMs === null) {
    return library;
  }

  return parseLocalLibrary({
    ...library,
    trash: (library.trash ?? []).filter(
      (entry) => now.getTime() - new Date(entry.deletedAt).getTime() <= retentionMs
    )
  });
}

export function getTrashDialSummaries(library: LocalLibrary) {
  return (library.trash ?? []).map((entry) => ({
    dialId: entry.dial.id,
    title: entry.dial.title,
    url: entry.dial.url,
    originalSpaceId: entry.originalSpaceId,
    originalSpaceName: entry.originalSpaceName,
    deletedAt: entry.deletedAt
  }));
}

function findDial(library: LocalLibrary, dialId: string) {
  for (const space of library.spaces) {
    const index = space.dials.findIndex((dial) => dial.id === dialId);

    if (index >= 0) {
      return {
        space,
        dial: space.dials[index],
        index
      };
    }
  }

  return null;
}
