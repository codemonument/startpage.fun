import { parseLocalLibrary, type LocalLibrary } from './library';
import type { StartPageSettings } from './settings';

export function moveDialWithinSpace(
  library: LocalLibrary,
  dialId: string,
  direction: 'earlier' | 'later'
): LocalLibrary {
  return parseLocalLibrary({
    ...library,
    spaces: library.spaces.map((space) => {
      const index = space.dials.findIndex((dial) => dial.id === dialId);

      if (index < 0) {
        return space;
      }

      const targetIndex = direction === 'earlier' ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex >= space.dials.length) {
        return space;
      }

      const nextDials = [...space.dials];
      const [dial] = nextDials.splice(index, 1);
      nextDials.splice(targetIndex, 0, dial);

      return {
        ...space,
        dials: nextDials
      };
    })
  });
}

export function shouldShowAddTile(
  settings: Pick<StartPageSettings, 'addTileVisibility'>,
  dialCount: number
): boolean {
  if (settings.addTileVisibility === 'always') {
    return true;
  }

  return dialCount === 0;
}
