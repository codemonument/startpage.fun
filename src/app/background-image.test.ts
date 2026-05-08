import { describe, expect, it } from 'vitest';
import {
  clearBackgroundMetadata,
  createBackgroundMetadata,
  selectBackgroundVariant
} from './background-image';

describe('createBackgroundMetadata', () => {
  it('creates original and compressed variant metadata for a saved image', () => {
    expect(
      createBackgroundMetadata({
        fileName: 'Aurora Sky.png',
        mimeType: 'image/png',
        updatedAt: '2026-05-05T17:00:00.000Z'
      })
    ).toMatchObject({
      version: 1,
      mimeType: 'image/png',
      originalPath: 'backgrounds/aurora-sky-original.png',
      compressedPath: 'backgrounds/aurora-sky-compressed.webp',
      updatedAt: '2026-05-05T17:00:00.000Z'
    });
  });
});

describe('selectBackgroundVariant', () => {
  const metadata = createBackgroundMetadata({
    fileName: 'Aurora Sky.png',
    mimeType: 'image/png',
    updatedAt: '2026-05-05T17:00:00.000Z'
  });

  it('prefers the compressed variant when available', () => {
    expect(selectBackgroundVariant(metadata, { prefersCompressed: true })).toBe(
      'backgrounds/aurora-sky-compressed.webp'
    );
  });

  it('falls back to the original variant when compressed is not preferred', () => {
    expect(selectBackgroundVariant(metadata, { prefersCompressed: false })).toBe(
      'backgrounds/aurora-sky-original.png'
    );
  });
});

describe('clearBackgroundMetadata', () => {
  it('resets back to the default background state', () => {
    expect(clearBackgroundMetadata()).toBeNull();
  });
});
