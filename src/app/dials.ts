import { parseLocalLibrary, type Dial, type LocalLibrary } from './library';
import type { StartPageSettings } from './settings';

export type DialInput = {
  url: string;
  title: string;
};

export type LaunchInteraction = 'primary' | 'middle';

export function normalizeDialUrl(candidate: string): string {
  const trimmed = candidate.trim();
  const withScheme = /^[a-zA-Z][a-zA-Z\d+.-]*:/.test(trimmed) ? trimmed : `https://${trimmed}`;

  return new URL(withScheme).toString();
}

export function deriveDefaultDialTitle(url: string): string {
  return new URL(url).hostname;
}

export function createDialFromInput(input: DialInput, id: string): Dial {
  const normalizedUrl = normalizeDialUrl(input.url);
  const title = input.title.trim() || deriveDefaultDialTitle(normalizedUrl);

  return {
    id,
    title,
    url: normalizedUrl
  };
}

export function addDialToActiveSpace(library: LocalLibrary, input: DialInput): LocalLibrary {
  const nextDialId = `dial-${library.spaces.reduce((count, space) => count + space.dials.length, 0) + 1}`;
  const nextDial = createDialFromInput(input, nextDialId);

  return parseLocalLibrary({
    ...library,
    spaces: library.spaces.map((space) =>
      space.id === library.activeSpaceId
        ? {
            ...space,
            dials: [...space.dials, nextDial]
          }
        : space
    )
  });
}

export function resolveLaunchTarget(
  settings: Pick<StartPageSettings, 'launchTarget'>,
  interaction: LaunchInteraction
): '_self' | '_blank' {
  if (interaction === 'middle') {
    return '_blank';
  }

  return settings.launchTarget === 'new-tab' ? '_blank' : '_self';
}
