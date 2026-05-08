export type BackgroundMetadata = {
  version: 1;
  mimeType: string;
  originalPath: string;
  compressedPath: string | null;
  updatedAt: string;
};

export function createBackgroundMetadata(input: {
  fileName: string;
  mimeType: string;
  updatedAt: string;
}): BackgroundMetadata {
  const baseName = slugifyBackgroundName(input.fileName);
  const originalExtension = extensionFromFileName(input.fileName) ?? extensionFromMimeType(input.mimeType) ?? 'bin';

  return {
    version: 1,
    mimeType: input.mimeType,
    originalPath: `backgrounds/${baseName}-original.${originalExtension}`,
    compressedPath: `backgrounds/${baseName}-compressed.webp`,
    updatedAt: input.updatedAt
  };
}

export function selectBackgroundVariant(
  metadata: BackgroundMetadata,
  options: { prefersCompressed: boolean }
): string {
  if (options.prefersCompressed && metadata.compressedPath) {
    return metadata.compressedPath;
  }

  return metadata.originalPath;
}

export function clearBackgroundMetadata(): null {
  return null;
}

function slugifyBackgroundName(fileName: string): string {
  return fileName
    .replace(/\.[^.]+$/, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'background';
}

function extensionFromFileName(fileName: string): string | null {
  const match = fileName.toLowerCase().match(/\.([a-z0-9]+)$/);
  return match?.[1] ?? null;
}

function extensionFromMimeType(mimeType: string): string | null {
  const mapping: Record<string, string> = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/webp': 'webp',
    'image/svg+xml': 'svg'
  };

  return mapping[mimeType] ?? null;
}
