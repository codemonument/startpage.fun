import fuzzysort from 'fuzzysort';
import type { LocalLibrary } from './library';

export type DialSearchEntry = {
  dialId: string;
  title: string;
  spaceId: string;
  spaceName: string;
  hostname: string;
  url: string;
};

export function buildDialSearchIndex(library: LocalLibrary): DialSearchEntry[] {
  return library.spaces.flatMap((space) =>
    space.dials.map((dial) => ({
      dialId: dial.id,
      title: dial.title,
      spaceId: space.id,
      spaceName: space.name,
      hostname: new URL(dial.url).hostname,
      url: dial.url
    }))
  );
}

export function searchDials(library: LocalLibrary, query: string): DialSearchEntry[] {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return buildDialSearchIndex(library);
  }

  const entries = buildDialSearchIndex(library);
  const titleResults = fuzzysort.go(trimmedQuery, entries, { key: 'title', limit: 20 });
  const hostnameResults = fuzzysort.go(trimmedQuery, entries, { key: 'hostname', limit: 20 });
  const urlResults = fuzzysort.go(trimmedQuery, entries, { key: 'url', limit: 20 });
  const scored = new Map<string, { entry: DialSearchEntry; score: number }>();

  for (const result of titleResults) {
    scored.set(result.obj.dialId, { entry: result.obj, score: result.score - 10_000 });
  }

  for (const result of hostnameResults) {
    const current = scored.get(result.obj.dialId);
    const candidateScore = result.score - 5_000;

    if (!current || candidateScore < current.score) {
      scored.set(result.obj.dialId, { entry: result.obj, score: candidateScore });
    }
  }

  for (const result of urlResults) {
    const current = scored.get(result.obj.dialId);

    if (!current || result.score < current.score) {
      scored.set(result.obj.dialId, { entry: result.obj, score: result.score });
    }
  }

  return [...scored.values()]
    .sort((left, right) => left.score - right.score)
    .map((result) => result.entry);
}
