import { appDb } from './app-db';
import type { StartupSnapshot } from '@/app/bootstrap';
import { parseLocalLibrary, type LocalLibrary } from '@/app/library';
import type { StartPageSettings } from '@/app/settings';

const SETTINGS_KEY = 'settings';
const LIBRARY_KEY = 'library';
const SHELL_READY_KEY = 'shell-ready';

export async function loadStartupSnapshot(): Promise<StartupSnapshot> {
  const [settingsRow, libraryRow] = await Promise.all([
    appDb.meta.get(SETTINGS_KEY),
    appDb.meta.get(LIBRARY_KEY)
  ]);

  const library = libraryRow ? parseLocalLibrary(libraryRow.value) : null;

  return {
    hasLibrary: library !== null,
    persistedSettings: settingsRow?.value as StartupSnapshot['persistedSettings'],
    library
  };
}

export async function saveNormalizedSettings(settings: StartPageSettings): Promise<void> {
  await appDb.meta.put({
    key: SETTINGS_KEY,
    value: settings
  });
}

export async function saveLibrary(library: LocalLibrary): Promise<void> {
  await appDb.meta.put({
    key: LIBRARY_KEY,
    value: library
  });
}

export async function markShellReady(): Promise<void> {
  await appDb.meta.put({
    key: SHELL_READY_KEY,
    value: new Date().toISOString()
  });
}
