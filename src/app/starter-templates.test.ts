import { describe, expect, it } from 'vitest';
import {
  buildLibraryFromStarterTemplate,
  shouldOfferStarterTemplates,
  starterTemplates
} from './starter-templates';

describe('starterTemplates', () => {
  it('keeps the empty and example templates available', () => {
    expect(starterTemplates.map((template) => template.id)).toEqual(['empty', 'example']);
  });

  it('keeps the example template lean enough to teach the product quickly', () => {
    const exampleTemplate = starterTemplates.find((template) => template.id === 'example');

    expect(exampleTemplate?.spaces).toHaveLength(1);
    expect(exampleTemplate?.spaces[0]?.dials.length).toBeLessThanOrEqual(5);
  });
});

describe('buildLibraryFromStarterTemplate', () => {
  it('builds a single empty Space for the empty template', () => {
    const library = buildLibraryFromStarterTemplate('empty');

    expect(library.spaces).toHaveLength(1);
    expect(library.spaces[0]).toMatchObject({
      name: 'Home',
      dials: []
    });
    expect(library.activeSpaceId).toBe(library.spaces[0]?.id);
  });

  it('builds a single example Space with real saved Dials', () => {
    const library = buildLibraryFromStarterTemplate('example');

    expect(library.spaces).toHaveLength(1);
    expect(library.spaces[0]?.dials).toHaveLength(5);
    expect(library.spaces[0]?.dials[0]).toMatchObject({
      title: 'Figma',
      url: 'https://www.figma.com/'
    });
  });
});

describe('shouldOfferStarterTemplates', () => {
  it('offers starter templates when the Local Library does not exist yet', () => {
    expect(shouldOfferStarterTemplates({ hasLibrary: false })).toBe(true);
  });

  it('suppresses starter templates once a Local Library already exists', () => {
    expect(shouldOfferStarterTemplates({ hasLibrary: true })).toBe(false);
  });
});
