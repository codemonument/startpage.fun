import { describe, expect, it } from 'vitest';
import {
  canRetryFavicon,
  createDialIconSelection,
  deriveFallbackIconText,
  reconcileDialIconSelection,
  updateDialIconSelection
} from './icon-assets';

describe('deriveFallbackIconText', () => {
  it('derives a concise fallback mark from the dial title', () => {
    expect(deriveFallbackIconText('GitHub')).toBe('G');
  });
});

describe('createDialIconSelection', () => {
  it('prefers a favicon when the URL is not a localhost-style destination', () => {
    expect(createDialIconSelection('https://github.com/codemonument/startpage.fun', 'GitHub')).toMatchObject({
      mode: 'favicon',
      faviconUrl: 'https://github.com/favicon.ico',
      fallbackText: 'G'
    });
  });

  it('falls back to generated text when favicon resolution is not immediately available', () => {
    expect(createDialIconSelection('http://127.0.0.1:4173/launch-target.html', 'Launch target')).toMatchObject({
      mode: 'fallback',
      faviconUrl: null,
      fallbackText: 'L'
    });
  });
});

describe('canRetryFavicon', () => {
  it('only retries while the Dial is still using a text-only fallback', () => {
    expect(
      canRetryFavicon({ mode: 'fallback', faviconUrl: null, fallbackText: 'L', customDataUrl: null })
    ).toBe(true);
    expect(
      canRetryFavicon({ mode: 'custom', faviconUrl: null, fallbackText: 'L', customDataUrl: 'data:image/svg+xml;base64,abc' })
    ).toBe(false);
  });
});

describe('reconcileDialIconSelection', () => {
  it('preserves stored custom icon data while recalculating favicon and fallback metadata', () => {
    expect(
      reconcileDialIconSelection(
        {
          mode: 'custom',
          faviconUrl: 'https://github.com/favicon.ico',
          fallbackText: 'G',
          customDataUrl: 'data:image/svg+xml;base64,abc'
        },
        'https://github.com/features',
        'GitHub Features'
      )
    ).toMatchObject({
      mode: 'custom',
      faviconUrl: 'https://github.com/favicon.ico',
      fallbackText: 'G',
      customDataUrl: 'data:image/svg+xml;base64,abc'
    });
  });
});

describe('updateDialIconSelection', () => {
  it('keeps stored custom icon data when switching away and back', () => {
    const withCustomIcon = updateDialIconSelection(
      { mode: 'favicon', faviconUrl: 'https://github.com/favicon.ico', fallbackText: 'G', customDataUrl: null },
      { mode: 'custom', customDataUrl: 'data:image/svg+xml;base64,abc' }
    );
    const withFallbackSelected = updateDialIconSelection(withCustomIcon, { mode: 'fallback' });

    expect(withFallbackSelected.customDataUrl).toBe('data:image/svg+xml;base64,abc');

    const switchedBack = updateDialIconSelection(withFallbackSelected, { mode: 'custom' });
    expect(switchedBack.customDataUrl).toBe('data:image/svg+xml;base64,abc');
    expect(switchedBack.mode).toBe('custom');
  });
});
