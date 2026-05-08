export type DialIconSelection = {
  mode: 'favicon' | 'fallback' | 'custom';
  faviconUrl: string | null;
  fallbackText: string;
  customDataUrl: string | null;
};

export function deriveFallbackIconText(title: string): string {
  const trimmed = title.trim();
  return (trimmed[0] ?? '?').toUpperCase();
}

export function createDialIconSelection(url: string, title: string): DialIconSelection {
  const resolvedUrl = new URL(url);
  const fallbackText = deriveFallbackIconText(title || resolvedUrl.hostname);
  const faviconAllowed = !['127.0.0.1', 'localhost'].includes(resolvedUrl.hostname);

  return {
    mode: faviconAllowed ? 'favicon' : 'fallback',
    faviconUrl: faviconAllowed ? `${resolvedUrl.origin}/favicon.ico` : null,
    fallbackText,
    customDataUrl: null
  };
}

export function canRetryFavicon(selection: DialIconSelection): boolean {
  return selection.mode === 'fallback' && selection.faviconUrl === null;
}

export function updateDialIconSelection(
  current: DialIconSelection,
  update: Partial<DialIconSelection>
): DialIconSelection {
  return {
    ...current,
    ...update,
    customDataUrl: update.customDataUrl ?? current.customDataUrl
  };
}

export function reconcileDialIconSelection(
  current: DialIconSelection | null | undefined,
  url: string,
  title: string
): DialIconSelection {
  const base = createDialIconSelection(url, title);

  if (!current) {
    return base;
  }

  if (current.mode === 'custom' && current.customDataUrl) {
    return {
      ...base,
      mode: 'custom',
      customDataUrl: current.customDataUrl
    };
  }

  if (current.mode === 'fallback') {
    return {
      ...base,
      mode: 'fallback',
      customDataUrl: current.customDataUrl
    };
  }

  return {
    ...base,
    customDataUrl: current.customDataUrl
  };
}
