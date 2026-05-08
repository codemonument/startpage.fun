import { describe, expect, it } from 'vitest';
import { buildDialSearchIndex, searchDials } from './search';

const sampleLibrary = {
  version: 1 as const,
  activeSpaceId: 'space-1',
  spaces: [
    {
      id: 'space-1',
      name: 'Home',
      dials: [
        { id: 'dial-1', title: 'Docs', url: 'https://docs.example.com/getting-started' },
        { id: 'dial-2', title: 'GitHub', url: 'https://github.com/codemonument/startpage.fun' }
      ]
    },
    {
      id: 'space-2',
      name: 'Work',
      dials: [{ id: 'dial-3', title: 'Linear', url: 'https://linear.app/project/startpage' }]
    }
  ],
  trash: [
    {
      dial: { id: 'dial-4', title: 'Old docs', url: 'https://archive.example.com/' },
      originalSpaceId: 'space-1',
      originalSpaceName: 'Home',
      originalDialIndex: 0,
      deletedAt: '2026-05-04T12:00:00.000Z'
    }
  ]
};

describe('buildDialSearchIndex', () => {
  it('indexes active Dials across the whole Library and excludes Trash', () => {
    expect(buildDialSearchIndex(sampleLibrary).map((entry) => entry.dialId)).toEqual([
      'dial-1',
      'dial-2',
      'dial-3'
    ]);
  });
});

describe('searchDials', () => {
  it('prefers title matches ahead of hostname and deeper URL matches', () => {
    const results = searchDials(sampleLibrary, 'docs');

    expect(results.map((result) => result.dialId)).toEqual(['dial-1']);
  });

  it('finds Dials across other Spaces and returns title, Space, and hostname', () => {
    const [result] = searchDials(sampleLibrary, 'linear');

    expect(result).toMatchObject({
      dialId: 'dial-3',
      title: 'Linear',
      spaceName: 'Work',
      hostname: 'linear.app',
      url: 'https://linear.app/project/startpage'
    });
  });

  it('returns URL matches when title and hostname do not match directly', () => {
    expect(searchDials(sampleLibrary, 'codemonument').map((result) => result.dialId)).toEqual(['dial-2']);
  });
});
