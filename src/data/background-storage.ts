import { appDb } from './app-db';
import {
  clearBackgroundMetadata,
  createBackgroundMetadata,
  selectBackgroundVariant,
  type BackgroundMetadata
} from '@/app/background-image';

const BACKGROUND_KEY = 'background-image';

export async function loadBackgroundMetadata(): Promise<BackgroundMetadata | null> {
  const row = await appDb.meta.get(BACKGROUND_KEY);
  return (row?.value as BackgroundMetadata | undefined) ?? null;
}

export async function saveBackgroundFile(file: File): Promise<BackgroundMetadata> {
  const metadata = createBackgroundMetadata({
    fileName: file.name,
    mimeType: file.type || 'application/octet-stream',
    updatedAt: new Date().toISOString()
  });

  const directory = await getBackgroundDirectory();
  await writeFile(directory, metadata.originalPath, file);
  await writeFile(directory, metadata.compressedPath ?? metadata.originalPath, file);
  await appDb.meta.put({ key: BACKGROUND_KEY, value: metadata });

  return metadata;
}

export async function readBackgroundUrl(
  metadata: BackgroundMetadata,
  prefersCompressed: boolean
): Promise<string | null> {
  const directory = await getBackgroundDirectory();
  const fileHandle = await directory.getFileHandle(
    fileNameFromPath(selectBackgroundVariant(metadata, { prefersCompressed }))
  );
  const file = await fileHandle.getFile();

  return URL.createObjectURL(file);
}

export async function clearBackgroundFiles(metadata: BackgroundMetadata | null): Promise<void> {
  if (!metadata) {
    await appDb.meta.put({ key: BACKGROUND_KEY, value: clearBackgroundMetadata() });
    return;
  }

  const directory = await getBackgroundDirectory();
  await removeFileIfPresent(directory, metadata.originalPath);

  if (metadata.compressedPath && metadata.compressedPath !== metadata.originalPath) {
    await removeFileIfPresent(directory, metadata.compressedPath);
  }

  await appDb.meta.put({ key: BACKGROUND_KEY, value: clearBackgroundMetadata() });
}

async function getBackgroundDirectory() {
  const root = await navigator.storage.getDirectory();
  return root.getDirectoryHandle('backgrounds', { create: true });
}

async function writeFile(directory: FileSystemDirectoryHandle, path: string, file: File) {
  const fileHandle = await directory.getFileHandle(fileNameFromPath(path), { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(await file.arrayBuffer());
  await writable.close();
}

async function removeFileIfPresent(directory: FileSystemDirectoryHandle, path: string) {
  try {
    await directory.removeEntry(fileNameFromPath(path));
  } catch {
    // Ignore missing files during reset.
  }
}

function fileNameFromPath(path: string): string {
  const name = path.split('/').at(-1);

  if (!name) {
    throw new Error('Background file path is invalid.');
  }

  return name;
}
