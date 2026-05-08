import { reconcileDialIconSelection } from './icon-assets';
import { normalizeDialUrl } from './dials';
import { parseLocalLibrary, type Dial, type LocalLibrary } from './library';

export type DialDraft = {
  title: string;
  url: string;
  spaceId: string;
  iconMode: 'favicon' | 'fallback' | 'custom';
  customIconDataUrl: string | null;
};

export type DialEditorSession = {
  form: DialDraft;
  hasRestorableDraft: boolean;
};

export type DuplicateDialMatch = {
  dialId: string;
  title: string;
  url: string;
  spaceId: string;
  spaceName: string;
};

export function buildDialEditorSession(committed: Dial & { spaceId: string }, draft: DialDraft | null): DialEditorSession {
  return {
    form: {
      title: committed.title,
      url: committed.url,
      spaceId: committed.spaceId,
      iconMode: committed.icon?.mode ?? 'favicon',
      customIconDataUrl: committed.icon?.customDataUrl ?? null
    },
    hasRestorableDraft: draft !== null
  };
}

export function applyDialDraft(committed: DialDraft, draft: DialDraft | null): DialDraft {
  return draft ?? committed;
}

export function discardDialDraft(): null {
  return null;
}

export function findDuplicateDialUrl(
  library: LocalLibrary,
  editingDialId: string,
  candidateUrl: string
): DuplicateDialMatch | null {
  const normalizedCandidateUrl = normalizeDialUrl(candidateUrl);

  for (const space of library.spaces) {
    for (const dial of space.dials) {
      if (dial.id !== editingDialId && dial.url === normalizedCandidateUrl) {
        return {
          dialId: dial.id,
          title: dial.title,
          url: dial.url,
          spaceId: space.id,
          spaceName: space.name
        };
      }
    }
  }

  return null;
}

export function updateDialFromEditor(
  library: LocalLibrary,
  dialId: string,
  form: DialDraft
): LocalLibrary {
  const normalizedUrl = normalizeDialUrl(form.url);
  const title = form.title.trim() || new URL(normalizedUrl).hostname;
  const located = findDialInLibrary(library, dialId);

  if (!located) {
    throw new Error('Dial not found.');
  }

  const resolvedIcon = reconcileDialIconSelection(located.dial.icon, normalizedUrl, title);
  const updatedDial: Dial = {
    ...located.dial,
    title,
    url: normalizedUrl,
    icon: {
      ...resolvedIcon,
      mode:
        form.iconMode === 'custom' && (form.customIconDataUrl ?? resolvedIcon.customDataUrl)
          ? 'custom'
          : form.iconMode,
      customDataUrl: form.customIconDataUrl ?? resolvedIcon.customDataUrl
    }
  };

  return parseLocalLibrary({
    ...library,
    spaces: library.spaces.map((space) => {
      if (space.id === located.spaceId && space.id === form.spaceId) {
        return {
          ...space,
          dials: space.dials.map((dial) => (dial.id === dialId ? updatedDial : dial))
        };
      }

      if (space.id === located.spaceId) {
        return {
          ...space,
          dials: space.dials.filter((dial) => dial.id !== dialId)
        };
      }

      if (space.id === form.spaceId) {
        return {
          ...space,
          dials: [...space.dials, updatedDial]
        };
      }

      return space;
    })
  });
}

export function findDialInLibrary(
  library: LocalLibrary,
  dialId: string
): { spaceId: string; spaceName: string; dial: Dial } | null {
  for (const space of library.spaces) {
    const dial = space.dials.find((entry) => entry.id === dialId);

    if (dial) {
      return {
        spaceId: space.id,
        spaceName: space.name,
        dial
      };
    }
  }

  return null;
}
