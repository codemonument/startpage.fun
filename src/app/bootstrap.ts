import {
  defaultStartPageSettings,
  normalizeStartPageSettings,
  type StartPageSettings,
  type StartPageSettingsInput
} from './settings';
import type { LocalLibrary } from './library';
import { resolveStartupSpaceId } from './spaces';

export type StartupSnapshot = {
  hasLibrary: boolean;
  persistedSettings: StartPageSettingsInput | null;
  library: LocalLibrary | null;
};

export type StartupStage = 'bootstrap' | 'ready';

export type ShellModel = {
  stage: StartupStage;
  settings: StartPageSettings;
  library: LocalLibrary | null;
  activeSpaceId: string | null;
  activeSpaceName: string | null;
};

export function resolveStartupStage(snapshot: Pick<StartupSnapshot, 'hasLibrary'>): StartupStage {
  return snapshot.hasLibrary ? 'ready' : 'bootstrap';
}

export function createShellModel(snapshot: StartupSnapshot): ShellModel {
  const settings = snapshot.persistedSettings
    ? normalizeStartPageSettings(snapshot.persistedSettings)
    : defaultStartPageSettings;

  const activeSpaceId = snapshot.hasLibrary && snapshot.library
    ? resolveStartupSpaceId(snapshot.library, settings)
    : null;
  const activeSpaceName = activeSpaceId
    ? snapshot.library?.spaces.find((space) => space.id === activeSpaceId)?.name ?? null
    : null;

  return {
    stage: resolveStartupStage(snapshot),
    settings,
    library: snapshot.library,
    activeSpaceId,
    activeSpaceName
  };
}
