import { describe, expect, it } from 'vitest';
import { createShellModel, resolveStartupStage } from './bootstrap';

describe('resolveStartupStage', () => {
  it('keeps the shell in bootstrap mode before any Local Library exists', () => {
    expect(resolveStartupStage({ hasLibrary: false })).toBe('bootstrap');
  });

  it('switches to ready mode once a Local Library exists', () => {
    expect(resolveStartupStage({ hasLibrary: true })).toBe('ready');
  });
});

describe('createShellModel', () => {
  it('drops active-space state while the shell is still waiting for a library', () => {
    expect(
      createShellModel({
        hasLibrary: false,
        persistedSettings: { launchTarget: 'new-tab' },
        library: null
      })
    ).toEqual({
      stage: 'bootstrap',
      settings: {
        launchTarget: 'new-tab',
        reopenBehavior: 'last-active-space',
        defaultSpaceId: null,
        spaceBarOverflow: 'multi-row',
        spaceBarRowCap: 2,
        addTileVisibility: 'always',
        trashRetentionHours: null
      },
      library: null,
      activeSpaceId: null,
      activeSpaceName: null
    });
  });

  it('keeps the active space when the Local Library is ready', () => {
    expect(
      createShellModel({
        hasLibrary: true,
        persistedSettings: {
          defaultSpaceId: 'space-2',
          reopenBehavior: 'default-space'
        },
        library: {
          version: 1,
          activeSpaceId: 'space-1',
          spaces: [
            {
              id: 'space-1',
              name: 'Work',
              dials: []
            },
            {
              id: 'space-2',
              name: 'Personal',
              dials: []
            }
          ]
        }
      })
    ).toEqual({
      stage: 'ready',
      settings: {
        launchTarget: 'current-tab',
        reopenBehavior: 'default-space',
        defaultSpaceId: 'space-2',
        spaceBarOverflow: 'multi-row',
        spaceBarRowCap: 2,
        addTileVisibility: 'always',
        trashRetentionHours: null
      },
      library: {
        version: 1,
        activeSpaceId: 'space-1',
        spaces: [
          {
            id: 'space-1',
            name: 'Work',
            dials: []
          },
          {
            id: 'space-2',
            name: 'Personal',
            dials: []
          }
        ]
      },
      activeSpaceId: 'space-2',
      activeSpaceName: 'Personal'
    });
  });
});
