import { describe, expect, it } from 'vitest';
import {
  addDialToActiveSpace,
  createDialFromInput,
  deriveDefaultDialTitle,
  normalizeDialUrl,
  resolveLaunchTarget
} from './dials';

describe('normalizeDialUrl', () => {
  it('adds https when the user enters a bare hostname', () => {
    expect(normalizeDialUrl('example.com/docs')).toBe('https://example.com/docs');
  });

  it('preserves explicit schemes', () => {
    expect(normalizeDialUrl('http://localhost:4173/launch-target.html')).toBe(
      'http://localhost:4173/launch-target.html'
    );
  });
});

describe('deriveDefaultDialTitle', () => {
  it('uses the hostname including subdomains when the user does not provide a title', () => {
    expect(deriveDefaultDialTitle('https://docs.example.com/path')).toBe('docs.example.com');
  });
});

describe('createDialFromInput', () => {
  it('builds a Dial with the normalized URL and derived title', () => {
    expect(createDialFromInput({ url: 'example.com/tools', title: '' }, 'dial-7')).toMatchObject({
      id: 'dial-7',
      title: 'example.com',
      url: 'https://example.com/tools'
    });
  });
});

describe('addDialToActiveSpace', () => {
  it('appends a new Dial to the active Space without disturbing existing Dials', () => {
    const nextLibrary = addDialToActiveSpace(
      {
        version: 1,
        activeSpaceId: 'space-1',
        spaces: [
          {
            id: 'space-1',
            name: 'Home',
            dials: [{ id: 'dial-1', title: 'GitHub', url: 'https://github.com/' }]
          }
        ]
      },
      { url: 'example.com/tools', title: '' }
    );

    expect(nextLibrary.spaces[0]?.dials.map((dial) => dial.title)).toEqual(['GitHub', 'example.com']);
  });
});

describe('resolveLaunchTarget', () => {
  it('uses the current tab for the default primary launch behavior', () => {
    expect(resolveLaunchTarget({ launchTarget: 'current-tab' }, 'primary')).toBe('_self');
  });

  it('still opens a middle click in a new tab', () => {
    expect(resolveLaunchTarget({ launchTarget: 'current-tab' }, 'middle')).toBe('_blank');
  });

  it('respects the new-tab launch preference for primary launches', () => {
    expect(resolveLaunchTarget({ launchTarget: 'new-tab' }, 'primary')).toBe('_blank');
  });
});
