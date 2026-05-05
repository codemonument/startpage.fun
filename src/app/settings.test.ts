import { describe, expect, it } from 'vitest';
import { defaultStartPageSettings, normalizeStartPageSettings } from './settings';

describe('normalizeStartPageSettings', () => {
  it('fills in every shell default when persisted settings are missing', () => {
    expect(normalizeStartPageSettings(null)).toEqual(defaultStartPageSettings);
  });

  it('keeps explicit persisted choices while defaulting missing fields', () => {
    expect(
      normalizeStartPageSettings({
        launchTarget: 'new-tab',
        addTileVisibility: 'empty-only'
      })
    ).toEqual({
      launchTarget: 'new-tab',
      reopenBehavior: 'last-active-space',
      defaultSpaceId: null,
      spaceBarOverflow: 'multi-row',
      addTileVisibility: 'empty-only'
    });
  });
});
