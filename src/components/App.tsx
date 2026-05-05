import { For, Show, createSignal, onCleanup, onMount } from 'solid-js';
import { createShellModel, type ShellModel } from '@/app/bootstrap';
import { addDialToActiveSpace, resolveLaunchTarget } from '@/app/dials';
import {
  buildLibraryFromStarterTemplate,
  starterTemplates,
  type StarterTemplateId
} from '@/app/starter-templates';
import {
  createSpace,
  deleteSpace,
  renameSpace,
  selectActiveSpace,
  setDefaultSpace
} from '@/app/spaces';
import {
  loadStartupSnapshot,
  markShellReady,
  saveLibrary,
  saveNormalizedSettings
} from '@/data/bootstrap-repository';
import { registerSW } from 'virtual:pwa-register';

type ConnectivityState = 'online' | 'offline';
type InstallState = 'warming-cache' | 'offline-ready' | 'update-available';

export default function App() {
  const [shellModel, setShellModel] = createSignal<ShellModel | null>(null);
  const [loadError, setLoadError] = createSignal<string | null>(null);
  const [isApplyingTemplate, setIsApplyingTemplate] = createSignal(false);
  const [dialUrl, setDialUrl] = createSignal('');
  const [dialTitle, setDialTitle] = createSignal('');
  const [dialError, setDialError] = createSignal<string | null>(null);
  const [isSavingDial, setIsSavingDial] = createSignal(false);
  const [newSpaceName, setNewSpaceName] = createSignal('');
  const [renameSpaceName, setRenameSpaceName] = createSignal('');
  const [deleteConfirmationName, setDeleteConfirmationName] = createSignal('');
  const [deleteDestinationSpaceId, setDeleteDestinationSpaceId] = createSignal('');
  const [spaceError, setSpaceError] = createSignal<string | null>(null);
  const [isSavingSpace, setIsSavingSpace] = createSignal(false);
  const [connectivityState, setConnectivityState] = createSignal<ConnectivityState>(
    navigator.onLine ? 'online' : 'offline'
  );
  const [installState, setInstallState] = createSignal<InstallState>('warming-cache');

  registerSW({
    immediate: true,
    onOfflineReady() {
      setInstallState('offline-ready');
    },
    onNeedRefresh() {
      setInstallState('update-available');
    }
  });

  onMount(() => {
    const handleOnline = () => setConnectivityState('online');
    const handleOffline = () => setConnectivityState('offline');

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    onCleanup(() => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    });

    void hydrateShell();
  });

  async function hydrateShell() {
    try {
      const snapshot = await loadStartupSnapshot();
      const model = createShellModel(snapshot);

      await Promise.all([saveNormalizedSettings(model.settings), markShellReady()]);
      setShellModel(model);
      syncSpaceDrafts(model);
      setLoadError(null);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown shell bootstrap failure';
      setLoadError(message);
    }
  }

  function createSessionShellModel(model: ShellModel, library: NonNullable<ShellModel['library']>, settings = model.settings): ShellModel {
    const activeSpaceId = library.activeSpaceId;
    const activeSpaceName = library.spaces.find((space) => space.id === activeSpaceId)?.name ?? null;

    return {
      stage: 'ready',
      settings,
      library,
      activeSpaceId,
      activeSpaceName
    };
  }

  function syncSpaceDrafts(model: ShellModel) {
    setRenameSpaceName(model.activeSpaceName ?? '');
    setDeleteConfirmationName('');
    setDeleteDestinationSpaceId(
      model.library?.spaces.find((space) => space.id !== model.activeSpaceId)?.id ?? ''
    );
  }

  async function applyStarterTemplate(templateId: StarterTemplateId) {
    setIsApplyingTemplate(true);

    try {
      const library = buildLibraryFromStarterTemplate(templateId);
      const model = createSessionShellModel(createShellModel({ hasLibrary: false, persistedSettings: null, library: null }), library);
      await saveLibrary(library);
      setShellModel(model);
      syncSpaceDrafts(model);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to apply starter template';
      setLoadError(message);
    } finally {
      setIsApplyingTemplate(false);
    }
  }

  async function saveDial() {
    const model = shellModel();

    if (!model?.library) {
      setDialError('Create a Local Library before adding Dials.');
      return;
    }

    setIsSavingDial(true);
    setDialError(null);

    try {
      const nextLibrary = addDialToActiveSpace(model.library, {
        url: dialUrl(),
        title: dialTitle()
      });
      const nextModel = createSessionShellModel(model, nextLibrary);

      await saveLibrary(nextLibrary);
      setShellModel(nextModel);
      syncSpaceDrafts(nextModel);
      setDialUrl('');
      setDialTitle('');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save Dial';
      setDialError(message);
    } finally {
      setIsSavingDial(false);
    }
  }

  async function switchSpace(spaceId: string) {
    const model = shellModel();

    if (!model?.library) {
      return;
    }

    try {
      const nextLibrary = selectActiveSpace(model.library, spaceId);
      const nextModel = createSessionShellModel(model, nextLibrary);

      await saveLibrary(nextLibrary);
      setShellModel(nextModel);
      syncSpaceDrafts(nextModel);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to switch Spaces';
      setSpaceError(message);
    }
  }

  async function saveNewSpace() {
    const model = shellModel();

    if (!model?.library) {
      return;
    }

    setIsSavingSpace(true);
    setSpaceError(null);

    try {
      const nextLibrary = createSpace(model.library, newSpaceName());
      const nextModel = createSessionShellModel(model, nextLibrary);

      await saveLibrary(nextLibrary);
      setShellModel(nextModel);
      syncSpaceDrafts(nextModel);
      setNewSpaceName('');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to create Space';
      setSpaceError(message);
    } finally {
      setIsSavingSpace(false);
    }
  }

  async function saveSpaceRename() {
    const model = shellModel();

    if (!model?.library || !model.activeSpaceId) {
      return;
    }

    setIsSavingSpace(true);
    setSpaceError(null);

    try {
      const nextLibrary = renameSpace(model.library, model.activeSpaceId, renameSpaceName());
      const nextModel = createSessionShellModel(model, nextLibrary);

      await saveLibrary(nextLibrary);
      setShellModel(nextModel);
      syncSpaceDrafts(nextModel);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to rename Space';
      setSpaceError(message);
    } finally {
      setIsSavingSpace(false);
    }
  }

  async function saveDefaultSpace() {
    const model = shellModel();

    if (!model?.activeSpaceId) {
      return;
    }

    setIsSavingSpace(true);
    setSpaceError(null);

    try {
      const nextSettings = {
        ...model.settings,
        ...setDefaultSpace(model.settings, model.activeSpaceId)
      };
      const nextModel = createSessionShellModel(model, model.library!, nextSettings);

      await saveNormalizedSettings(nextSettings);
      setShellModel(nextModel);
      syncSpaceDrafts(nextModel);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to set the default Space';
      setSpaceError(message);
    } finally {
      setIsSavingSpace(false);
    }
  }

  async function removeActiveSpace() {
    const model = shellModel();

    if (!model?.library || !model.activeSpaceId) {
      return;
    }

    setIsSavingSpace(true);
    setSpaceError(null);

    try {
      const nextLibrary = deleteSpace(model.library, {
        spaceId: model.activeSpaceId,
        confirmationName: deleteConfirmationName(),
        destinationSpaceId: deleteDestinationSpaceId() || undefined
      });
      const deletedDefaultSpace = model.settings.defaultSpaceId === model.activeSpaceId;
      const nextSettings = deletedDefaultSpace
        ? {
            ...model.settings,
            defaultSpaceId: null,
            reopenBehavior: 'last-active-space' as const
          }
        : model.settings;
      const nextModel = createSessionShellModel(model, nextLibrary, nextSettings);

      await saveLibrary(nextLibrary);
      await saveNormalizedSettings(nextSettings);
      setShellModel(nextModel);
      syncSpaceDrafts(nextModel);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to delete Space';
      setSpaceError(message);
    } finally {
      setIsSavingSpace(false);
    }
  }

  return (
    <main class="min-h-screen px-6 py-8 sm:px-8 lg:px-12">
      <div class="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col gap-8 rounded-[32px] border border-outline bg-surface/80 p-6 shadow-panel backdrop-blur-xl sm:p-8">
        <header class="flex flex-col gap-4 border-b border-outline pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div class="space-y-3">
            <p class="text-xs uppercase tracking-[0.28em] text-sky-200/70">Start Page shell</p>
            <div class="space-y-2">
              <h1 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl">startpage.fun</h1>
              <p class="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Local-first launch surface bootstrapped with Solid, Tailwind, Dexie, Valibot, and a PWA-ready shell.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-3 text-sm text-slate-200">
            <StatusBadge
              label="Connectivity"
              value={connectivityState() === 'online' ? 'Online session' : 'Offline session'}
            />
            <StatusBadge
              label="Install"
              value={
                installState() === 'offline-ready'
                  ? 'Offline ready'
                  : installState() === 'update-available'
                    ? 'Update available'
                    : 'Warming cache'
              }
            />
          </div>
        </header>

        <div class="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <section
            class="rounded-3xl border border-outline bg-slate-950/35 p-6"
            data-testid="shell-stage-panel"
          >
            <Show when={!loadError()} fallback={<ErrorPanel message={loadError() ?? 'Shell bootstrap failed'} />}>
              <Show when={shellModel()} fallback={<LoadingPanel />}>
                {(model) => (
                  <Show
                    when={model().stage === 'bootstrap'}
                    fallback={
                      <ReadyPanel
                        deleteConfirmationName={deleteConfirmationName()}
                        deleteDestinationSpaceId={deleteDestinationSpaceId()}
                        dialError={dialError()}
                        dialTitle={dialTitle()}
                        dialUrl={dialUrl()}
                        isSavingDial={isSavingDial()}
                        isSavingSpace={isSavingSpace()}
                        newSpaceName={newSpaceName()}
                        renameSpaceName={renameSpaceName()}
                        shellModel={model()}
                        spaceError={spaceError()}
                        onDeleteConfirmationNameInput={setDeleteConfirmationName}
                        onDeleteDestinationSpaceIdInput={setDeleteDestinationSpaceId}
                        onDialTitleInput={setDialTitle}
                        onDialUrlInput={setDialUrl}
                        onNewSpaceNameInput={setNewSpaceName}
                        onRemoveActiveSpace={() => void removeActiveSpace()}
                        onRenameSpaceNameInput={setRenameSpaceName}
                        onSaveDefaultSpace={() => void saveDefaultSpace()}
                        onSaveDial={() => void saveDial()}
                        onSaveNewSpace={() => void saveNewSpace()}
                        onSaveSpaceRename={() => void saveSpaceRename()}
                        onSwitchSpace={(spaceId) => void switchSpace(spaceId)}
                      />
                    }
                  >
                    <BootstrapPanel
                      busy={isApplyingTemplate()}
                      onChooseTemplate={(templateId) => void applyStarterTemplate(templateId)}
                    />
                  </Show>
                )}
              </Show>
            </Show>
          </section>

          <aside class="space-y-4 rounded-3xl border border-outline bg-slate-950/35 p-6">
            <div class="space-y-3">
              <p class="text-xs uppercase tracking-[0.28em] text-sky-200/70">Default settings</p>
              <Show when={shellModel()} fallback={<p class="text-sm text-slate-400">Loading defaults…</p>}>
                {(model) => (
                  <dl class="space-y-3 text-sm text-slate-200">
                    <SettingRow label="Launch preference" value={model().settings.launchTarget} />
                    <SettingRow label="Startup behavior" value={model().settings.reopenBehavior} />
                    <SettingRow label="Default Space" value={model().settings.defaultSpaceId ?? 'none'} />
                    <SettingRow label="Add Tile visibility" value={model().settings.addTileVisibility} />
                  </dl>
                )}
              </Show>
            </div>

            <div class="space-y-3 rounded-2xl border border-dashed border-outline bg-slate-900/60 p-4">
              <p class="text-xs uppercase tracking-[0.28em] text-sky-200/70">Chrome placeholders</p>
              <div class="flex flex-wrap gap-2">
                <ToolbarChip label="Command Box" />
                <ToolbarChip label="Trash" />
                <ToolbarChip label="Settings" />
              </div>
              <p class="text-sm leading-6 text-slate-400">
                The Local Library now supports starter selection, Space lifecycle basics, and manual Dial creation.
                Later slices plug in overflow handling, Trash, Search, and richer editing.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function BootstrapPanel(props: {
  busy: boolean;
  onChooseTemplate: (templateId: StarterTemplateId) => void;
}) {
  return (
    <div class="flex h-full flex-col gap-8">
      <div class="space-y-4">
        <p class="text-xs uppercase tracking-[0.28em] text-sky-200/70">Startup stage</p>
        <div class="space-y-3">
          <h2 class="text-2xl font-semibold text-white">Choose a starter template</h2>
          <p class="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Your Local Library does not exist yet. Pick an Empty Template for a clean slate or an Example
            Template to start from a few real destinations.
          </p>
        </div>
      </div>

      <div class="grid gap-4 lg:grid-cols-2">
        <For each={starterTemplates}>
          {(template) => (
            <button
              type="button"
              class="flex h-full flex-col items-start gap-4 rounded-3xl border border-outline bg-slate-900/70 p-5 text-left transition hover:border-sky-300/60 hover:bg-slate-900 disabled:cursor-wait disabled:opacity-70"
              aria-label={`Choose ${template.title}`}
              disabled={props.busy}
              onClick={() => props.onChooseTemplate(template.id)}
            >
              <div class="space-y-2">
                <p class="text-xs uppercase tracking-[0.28em] text-sky-200/70">Starter Template</p>
                <h3 class="text-xl font-semibold text-white">{template.title}</h3>
                <p class="text-sm leading-6 text-slate-300">{template.description}</p>
              </div>
              <div class="rounded-2xl border border-outline bg-slate-950/60 px-4 py-3 text-sm text-slate-200">
                {template.spaces.length} Space · {template.spaces[0]?.dials.length ?? 0} Dials
              </div>
            </button>
          )}
        </For>
      </div>

      <dl class="grid gap-3 rounded-2xl border border-outline bg-slate-900/70 p-4 text-sm text-slate-200 sm:grid-cols-2">
        <SettingRow label="Persistence" value="Dexie-backed IndexedDB" />
        <SettingRow label="Validation" value="Valibot template parsing" />
        <SettingRow label="Offline" value="PWA cache warming in progress" />
        <SettingRow label="Example limit" value="5 Dials max" />
      </dl>
    </div>
  );
}

function ReadyPanel(props: {
  shellModel: ShellModel;
  dialUrl: string;
  dialTitle: string;
  dialError: string | null;
  isSavingDial: boolean;
  newSpaceName: string;
  renameSpaceName: string;
  deleteConfirmationName: string;
  deleteDestinationSpaceId: string;
  spaceError: string | null;
  isSavingSpace: boolean;
  onDialUrlInput: (value: string) => void;
  onDialTitleInput: (value: string) => void;
  onSaveDial: () => void;
  onNewSpaceNameInput: (value: string) => void;
  onSaveNewSpace: () => void;
  onRenameSpaceNameInput: (value: string) => void;
  onSaveSpaceRename: () => void;
  onSaveDefaultSpace: () => void;
  onDeleteConfirmationNameInput: (value: string) => void;
  onDeleteDestinationSpaceIdInput: (value: string) => void;
  onRemoveActiveSpace: () => void;
  onSwitchSpace: (spaceId: string) => void;
}) {
  const activeSpace = () =>
    props.shellModel.library?.spaces.find((space) => space.id === props.shellModel.activeSpaceId) ?? null;

  const dialCount = () =>
    props.shellModel.library?.spaces.reduce((count, space) => count + space.dials.length, 0) ?? 0;
  const librarySummary = () => {
    const spaceCount = props.shellModel.library?.spaces.length ?? 0;
    const totalDials = dialCount();
    return `${spaceCount} ${spaceCount === 1 ? 'Space' : 'Spaces'} · ${totalDials} ${totalDials === 1 ? 'Dial' : 'Dials'}`;
  };

  return (
    <div class="space-y-6">
      <div class="space-y-4">
        <div class="space-y-3">
          <p class="text-xs uppercase tracking-[0.28em] text-sky-200/70">Startup stage</p>
          <h2 class="text-2xl font-semibold text-white">Library shell loaded</h2>
          <p class="text-sm leading-7 text-slate-300 sm:text-base">
            {props.shellModel.activeSpaceName
              ? `Reopened ${props.shellModel.activeSpaceName}.`
              : 'A Local Library exists and can now be hydrated by later feature slices.'}
          </p>
        </div>

        <div class="flex flex-wrap gap-2" data-testid="space-tabs">
          <For each={props.shellModel.library?.spaces ?? []}>
            {(space) => (
              <button
                type="button"
                class={`rounded-full border px-4 py-2 text-sm transition ${
                  space.id === props.shellModel.activeSpaceId
                    ? 'border-sky-300/70 bg-sky-400/20 text-white'
                    : 'border-outline bg-slate-900/70 text-slate-200 hover:border-sky-300/40 hover:bg-slate-900'
                }`}
                aria-pressed={space.id === props.shellModel.activeSpaceId}
                onClick={() => props.onSwitchSpace(space.id)}
              >
                {space.name}
                <Show when={props.shellModel.settings.defaultSpaceId === space.id}>
                  <span class="ml-2 text-xs uppercase tracking-[0.22em] text-sky-200/80">Default</span>
                </Show>
              </button>
            )}
          </For>
        </div>
      </div>

      <div class="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div class="rounded-3xl border border-outline bg-slate-900/70 p-5">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <h3 class="text-xl font-semibold text-white">{activeSpace()?.name ?? 'Untitled Space'}</h3>
            <p class="rounded-full border border-outline px-3 py-1.5 text-sm text-slate-200">
              {librarySummary()}
            </p>
          </div>

          <form
            class="mt-5 grid gap-3 rounded-2xl border border-outline bg-slate-950/60 p-4 md:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)_auto]"
            data-testid="dial-form"
            onSubmit={(event) => {
              event.preventDefault();
              props.onSaveDial();
            }}
          >
            <label class="space-y-2 text-sm text-slate-300">
              <span>URL</span>
              <input
                class="w-full rounded-2xl border border-outline bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-300/70"
                name="url"
                placeholder="example.com"
                required
                value={props.dialUrl}
                onInput={(event) => props.onDialUrlInput(event.currentTarget.value)}
              />
            </label>
            <label class="space-y-2 text-sm text-slate-300">
              <span>Title (optional)</span>
              <input
                class="w-full rounded-2xl border border-outline bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-300/70"
                name="title"
                placeholder="My Dial"
                value={props.dialTitle}
                onInput={(event) => props.onDialTitleInput(event.currentTarget.value)}
              />
            </label>
            <button
              type="submit"
              class="mt-auto rounded-2xl border border-sky-300/40 bg-sky-400/15 px-4 py-3 text-sm font-medium text-sky-100 transition hover:border-sky-300/70 hover:bg-sky-400/25 disabled:cursor-wait disabled:opacity-70"
              disabled={props.isSavingDial}
            >
              {props.isSavingDial ? 'Saving…' : 'Save Dial'}
            </button>
            <Show when={props.dialError}>
              <p class="md:col-span-3 text-sm text-red-200">{props.dialError}</p>
            </Show>
          </form>

          <Show
            when={(activeSpace()?.dials.length ?? 0) > 0}
            fallback={
              <div class="mt-5 rounded-2xl border border-dashed border-outline bg-slate-950/60 p-5 text-sm leading-6 text-slate-300">
                <p class="font-medium text-white">No Dials yet</p>
                <p class="mt-2">This Space is empty. Add a Dial above or create another Space to organize more launch targets.</p>
              </div>
            }
          >
            <div class="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              <For each={activeSpace()?.dials ?? []}>
                {(dial) => (
                  <a
                    class="rounded-2xl border border-outline bg-slate-950/60 p-4 no-underline transition hover:border-sky-300/60 hover:bg-slate-900"
                    href={dial.url}
                    rel={
                      resolveLaunchTarget(props.shellModel.settings, 'primary') === '_blank'
                        ? 'noreferrer'
                        : undefined
                    }
                    target={
                      resolveLaunchTarget(props.shellModel.settings, 'primary') === '_blank' ? '_blank' : undefined
                    }
                  >
                    <p class="text-sm font-medium text-white">{dial.title}</p>
                    <p class="mt-2 text-sm text-slate-400">{new URL(dial.url).hostname}</p>
                  </a>
                )}
              </For>
            </div>
          </Show>
        </div>

        <div class="space-y-4 rounded-3xl border border-outline bg-slate-900/70 p-5">
          <div class="space-y-3">
            <p class="text-xs uppercase tracking-[0.28em] text-sky-200/70">Space actions</p>
            <form
              class="space-y-3"
              onSubmit={(event) => {
                event.preventDefault();
                props.onSaveNewSpace();
              }}
            >
              <label class="space-y-2 text-sm text-slate-300">
                <span>New Space name</span>
                <input
                  class="w-full rounded-2xl border border-outline bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-sky-300/70"
                  placeholder="Ideas"
                  value={props.newSpaceName}
                  onInput={(event) => props.onNewSpaceNameInput(event.currentTarget.value)}
                />
              </label>
              <button
                type="submit"
                class="rounded-2xl border border-outline px-4 py-3 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-950/60 disabled:cursor-wait disabled:opacity-70"
                disabled={props.isSavingSpace}
              >
                Create Space
              </button>
            </form>
          </div>

          <div class="space-y-3 rounded-2xl border border-outline bg-slate-950/60 p-4">
            <label class="space-y-2 text-sm text-slate-300">
              <span>Rename active Space</span>
              <input
                class="w-full rounded-2xl border border-outline bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-300/70"
                value={props.renameSpaceName}
                onInput={(event) => props.onRenameSpaceNameInput(event.currentTarget.value)}
              />
            </label>
            <button
              type="button"
              class="rounded-2xl border border-outline px-4 py-3 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-900 disabled:cursor-wait disabled:opacity-70"
              disabled={props.isSavingSpace}
              onClick={() => props.onSaveSpaceRename()}
            >
              Rename Space
            </button>
          </div>

          <div class="space-y-3 rounded-2xl border border-outline bg-slate-950/60 p-4">
            <p class="text-sm text-slate-300">Default Space</p>
            <p class="text-sm text-slate-400">
              Mark the active Space as the startup default and reopen it on the next launch.
            </p>
            <button
              type="button"
              class="rounded-2xl border border-outline px-4 py-3 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-900 disabled:cursor-wait disabled:opacity-70"
              disabled={props.isSavingSpace}
              onClick={() => props.onSaveDefaultSpace()}
            >
              Set active Space as default
            </button>
          </div>

          <div class="space-y-3 rounded-2xl border border-red-400/20 bg-red-950/20 p-4">
            <p class="text-sm text-red-100">Delete active Space</p>
            <Show when={(activeSpace()?.dials.length ?? 0) > 0}>
              <label class="space-y-2 text-sm text-red-50/90">
                <span>Move existing Dials into</span>
                <select
                  class="w-full rounded-2xl border border-red-200/15 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-red-200/40"
                  value={props.deleteDestinationSpaceId}
                  onInput={(event) => props.onDeleteDestinationSpaceIdInput(event.currentTarget.value)}
                >
                  <option value="">Choose a Space</option>
                  <For
                    each={props.shellModel.library?.spaces.filter(
                      (space) => space.id !== props.shellModel.activeSpaceId
                    ) ?? []}
                  >
                    {(space) => <option value={space.id}>{space.name}</option>}
                  </For>
                </select>
              </label>
            </Show>
            <label class="space-y-2 text-sm text-red-50/90">
              <span>Type the active Space name to confirm</span>
              <input
                class="w-full rounded-2xl border border-red-200/15 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-red-200/40"
                value={props.deleteConfirmationName}
                onInput={(event) => props.onDeleteConfirmationNameInput(event.currentTarget.value)}
              />
            </label>
            <button
              type="button"
              class="rounded-2xl border border-red-300/30 px-4 py-3 text-sm text-red-50 transition hover:border-red-200/60 hover:bg-red-400/10 disabled:cursor-wait disabled:opacity-70"
              disabled={props.isSavingSpace}
              onClick={() => props.onRemoveActiveSpace()}
            >
              Delete Space
            </button>
          </div>

          <Show when={props.spaceError}>
            <p class="text-sm text-red-200">{props.spaceError}</p>
          </Show>
        </div>
      </div>
    </div>
  );
}

function LoadingPanel() {
  return (
    <div class="space-y-3">
      <p class="text-xs uppercase tracking-[0.28em] text-sky-200/70">Startup stage</p>
      <h2 class="text-2xl font-semibold text-white">Bootstrapping shell…</h2>
      <p class="text-sm leading-7 text-slate-300">Reading persisted settings and preparing local storage.</p>
    </div>
  );
}

function ErrorPanel(props: { message: string }) {
  return (
    <div class="space-y-3 text-red-100">
      <p class="text-xs uppercase tracking-[0.28em] text-red-200/80">Startup stage</p>
      <h2 class="text-2xl font-semibold">Shell bootstrap failed</h2>
      <p class="text-sm leading-7 text-red-100/90">{props.message}</p>
    </div>
  );
}

function StatusBadge(props: { label: string; value: string }) {
  return (
    <div class="rounded-full border border-outline bg-slate-900/70 px-4 py-2">
      <p class="text-[0.65rem] uppercase tracking-[0.24em] text-sky-200/70">{props.label}</p>
      <p class="mt-1 font-medium text-white">{props.value}</p>
    </div>
  );
}

function ToolbarChip(props: { label: string }) {
  return <span class="rounded-full border border-outline px-3 py-1.5 text-sm text-slate-200">{props.label}</span>;
}

function SettingRow(props: { label: string; value: string }) {
  return (
    <div class="flex items-center justify-between gap-4 rounded-2xl border border-outline bg-slate-950/60 px-4 py-3">
      <dt class="text-slate-400">{props.label}</dt>
      <dd class="text-right font-medium text-white">{props.value}</dd>
    </div>
  );
}
