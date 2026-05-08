import { For, Show, createSignal, onCleanup, onMount } from 'solid-js';
import { createShellModel, type ShellModel } from '@/app/bootstrap';
import {
  applyDialDraft,
  buildDialEditorSession,
  findDialInLibrary,
  findDuplicateDialUrl,
  type DialDraft,
  type DuplicateDialMatch,
  updateDialFromEditor
} from '@/app/dial-editor';
import { buildCommandEntries, executeCommand } from '@/app/command-mode';
import { moveDialWithinSpace, shouldShowAddTile } from '@/app/dial-layout';
import { addDialToActiveSpace, resolveLaunchTarget } from '@/app/dials';
import type { DialIcon } from '@/app/library';
import {
  buildLibraryFromStarterTemplate,
  starterTemplates,
  type StarterTemplateId
} from '@/app/starter-templates';
import { searchDials } from '@/app/search';
import { partitionSpacesForBar } from '@/app/space-bar';
import {
  createSpace,
  deleteSpace,
  renameSpace,
  selectActiveSpace,
  setDefaultSpace
} from '@/app/spaces';
import {
  deleteDialToTrash,
  getTrashDialSummaries,
  permanentlyDeleteTrashDial,
  purgeExpiredTrash,
  purgeTrash,
  restoreDialFromTrash,
  restoreMostRecentDialFromSpace
} from '@/app/trash';
import {
  deleteDialDraft,
  loadDialDraft,
  loadStartupSnapshot,
  markShellReady,
  saveDialDraft,
  saveLibrary,
  saveNormalizedSettings
} from '@/data/bootstrap-repository';
import {
  clearBackgroundFiles,
  loadBackgroundMetadata,
  readBackgroundUrl,
  saveBackgroundFile
} from '@/data/background-storage';
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
  const [editingDialId, setEditingDialId] = createSignal<string | null>(null);
  const [dialEditorForm, setDialEditorForm] = createSignal<DialDraft | null>(null);
  const [hasRestorableDialDraft, setHasRestorableDialDraft] = createSignal(false);
  const [dialEditorError, setDialEditorError] = createSignal<string | null>(null);
  const [duplicateDialMatch, setDuplicateDialMatch] = createSignal<DuplicateDialMatch | null>(null);
  const [newSpaceName, setNewSpaceName] = createSignal('');
  const [renameSpaceName, setRenameSpaceName] = createSignal('');
  const [deleteConfirmationName, setDeleteConfirmationName] = createSignal('');
  const [deleteDestinationSpaceId, setDeleteDestinationSpaceId] = createSignal('');
  const [spaceError, setSpaceError] = createSignal<string | null>(null);
  const [isSavingSpace, setIsSavingSpace] = createSignal(false);
  const [trashRetentionHoursInput, setTrashRetentionHoursInput] = createSignal('');
  const [trashPurgeConfirmation, setTrashPurgeConfirmation] = createSignal('');
  const [connectivityState, setConnectivityState] = createSignal<ConnectivityState>(
    navigator.onLine ? 'online' : 'offline'
  );
  const [installState, setInstallState] = createSignal<InstallState>('warming-cache');
  const [isTrashOpen, setIsTrashOpen] = createSignal(false);
  const [isCommandBoxOpen, setIsCommandBoxOpen] = createSignal(false);
  const [commandQuery, setCommandQuery] = createSignal('');
  const [commandBoxMessage, setCommandBoxMessage] = createSignal<string | null>(null);
  const [isOverflowMenuOpen, setIsOverflowMenuOpen] = createSignal(false);
  const [spaceBarOverflowInput, setSpaceBarOverflowInput] = createSignal<'multi-row' | 'scroll' | 'menu'>('multi-row');
  const [spaceBarRowCapInput, setSpaceBarRowCapInput] = createSignal('2');
  const [addTileVisibilityInput, setAddTileVisibilityInput] = createSignal<'always' | 'empty-only'>('always');
  const [backgroundImageUrl, setBackgroundImageUrl] = createSignal<string | null>(null);
  const [backgroundUploadFile, setBackgroundUploadFile] = createSignal<File | null>(null);
  const [backgroundUploadName, setBackgroundUploadName] = createSignal('');
  const [backgroundError, setBackgroundError] = createSignal<string | null>(null);

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
      const retentionMs = model.settings.trashRetentionHours ? model.settings.trashRetentionHours * 60 * 60 * 1000 : null;
      const retainedLibrary = model.library ? purgeExpiredTrash(model.library, new Date(), retentionMs) : null;
      const hydratedModel = retainedLibrary
        ? createShellModel({
            hasLibrary: true,
            persistedSettings: model.settings,
            library: retainedLibrary
          })
        : model;
      const backgroundMetadata = await loadBackgroundMetadata();
      const backgroundUrl = backgroundMetadata
        ? await readBackgroundUrl(backgroundMetadata, true)
        : null;

      await Promise.all([
        saveNormalizedSettings(hydratedModel.settings),
        retainedLibrary ? saveLibrary(retainedLibrary) : Promise.resolve(),
        markShellReady()
      ]);
      replaceBackgroundUrl(backgroundUrl);
      setShellModel(hydratedModel);
      syncSpaceDrafts(hydratedModel);
      setLoadError(null);
      setBackgroundError(null);
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

  function replaceBackgroundUrl(nextUrl: string | null) {
    const currentUrl = backgroundImageUrl();

    if (currentUrl && currentUrl.startsWith('blob:')) {
      URL.revokeObjectURL(currentUrl);
    }

    setBackgroundImageUrl(nextUrl);
  }

  function syncSpaceDrafts(model: ShellModel) {
    setRenameSpaceName(model.activeSpaceName ?? '');
    setDeleteConfirmationName('');
    setDeleteDestinationSpaceId(
      model.library?.spaces.find((space) => space.id !== model.activeSpaceId)?.id ?? ''
    );
    setSpaceBarOverflowInput(model.settings.spaceBarOverflow);
    setSpaceBarRowCapInput(model.settings.spaceBarRowCap.toString());
    setAddTileVisibilityInput(model.settings.addTileVisibility);
    setTrashRetentionHoursInput(model.settings.trashRetentionHours?.toString() ?? '');
    setTrashPurgeConfirmation('');
  }

  function updateDuplicateDialWarning(
    library: NonNullable<ShellModel['library']> | null,
    dialId: string | null,
    form: DialDraft | null
  ) {
    if (!library || !dialId || !form) {
      setDuplicateDialMatch(null);
      return;
    }

    try {
      setDuplicateDialMatch(findDuplicateDialUrl(library, dialId, form.url));
    } catch {
      setDuplicateDialMatch(null);
    }
  }

  function closeDialEditor() {
    setEditingDialId(null);
    setDialEditorForm(null);
    setHasRestorableDialDraft(false);
    setDialEditorError(null);
    setDuplicateDialMatch(null);
  }

  async function openDialEditor(dialId: string) {
    const model = shellModel();

    if (!model?.library) {
      return;
    }

    const located = findDialInLibrary(model.library, dialId);

    if (!located) {
      setDialEditorError('Dial not found.');
      return;
    }

    const draft = await loadDialDraft(dialId);
    const session = buildDialEditorSession({ ...located.dial, spaceId: located.spaceId }, draft);

    setEditingDialId(dialId);
    setDialEditorForm(session.form);
    setHasRestorableDialDraft(session.hasRestorableDraft);
    setDialEditorError(null);
    updateDuplicateDialWarning(model.library, dialId, session.form);
  }

  async function restoreDialEditorDraft() {
    const model = shellModel();
    const dialId = editingDialId();
    const form = dialEditorForm();

    if (!model?.library || !dialId || !form) {
      return;
    }

    const draft = await loadDialDraft(dialId);
    const restored = applyDialDraft(form, draft);
    setDialEditorForm(restored);
    setHasRestorableDialDraft(false);
    updateDuplicateDialWarning(model.library, dialId, restored);
  }

  function updateDialEditorDraftValue(patch: Partial<DialDraft>) {
    const model = shellModel();
    const dialId = editingDialId();
    const currentForm = dialEditorForm();

    if (!model?.library || !dialId || !currentForm) {
      return;
    }

    const nextForm = { ...currentForm, ...patch };
    setDialEditorForm(nextForm);
    setHasRestorableDialDraft(false);
    setDialEditorError(null);
    updateDuplicateDialWarning(model.library, dialId, nextForm);
    void saveDialDraft(dialId, nextForm);
  }

  async function updateDialEditorCustomIcon(file: File | null) {
    if (!file) {
      return;
    }

    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
      reader.onerror = () => reject(reader.error ?? new Error('Unable to read icon file.'));
      reader.readAsDataURL(file);
    });

    updateDialEditorDraftValue({
      iconMode: 'custom',
      customIconDataUrl: dataUrl
    });
  }

  async function discardDialEditorDraft() {
    const dialId = editingDialId();

    if (!dialId) {
      return;
    }

    await deleteDialDraft(dialId);
    closeDialEditor();
  }

  async function commitDialEditor() {
    const model = shellModel();
    const dialId = editingDialId();
    const form = dialEditorForm();

    if (!model?.library || !dialId || !form) {
      return;
    }

    setDialEditorError(null);

    try {
      const nextLibrary = updateDialFromEditor(model.library, dialId, form);
      const nextModel = createSessionShellModel(model, nextLibrary);

      await saveLibrary(nextLibrary);
      await deleteDialDraft(dialId);
      setShellModel(nextModel);
      syncSpaceDrafts(nextModel);
      closeDialEditor();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save Dial changes';
      setDialEditorError(message);
    }
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
      setIsTrashOpen(false);
      setIsOverflowMenuOpen(false);
      syncSpaceDrafts(nextModel);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to switch Spaces';
      setSpaceError(message);
    }
  }

  function openTrash() {
    setIsTrashOpen(true);
    setIsOverflowMenuOpen(false);
  }

  function openCommandBox() {
    setCommandQuery('');
    setCommandBoxMessage(null);
    setIsCommandBoxOpen(true);
  }

  function closeCommandBox() {
    setIsCommandBoxOpen(false);
    setCommandQuery('');
    setCommandBoxMessage(null);
  }

  function toggleOverflowMenu() {
    setIsOverflowMenuOpen((open) => !open);
  }

  async function runCommandModeAction(commandId: 'open-trash' | 'set-launch-new-tab' | 'set-launch-current-tab' | 'undo-recent-delete') {
    const model = shellModel();

    if (!model) {
      return;
    }

    const hasUndoCandidate =
      !!model.library &&
      !!model.activeSpaceId &&
      restoreMostRecentDialFromSpace(model.library, model.activeSpaceId, new Date()) !== model.library;

    const outcome = executeCommand(commandId, {
      settings: model.settings,
      activeSpaceId: model.activeSpaceId,
      hasUndoCandidate,
      isTrashOpen: isTrashOpen()
    });

    if (!outcome.closeCommandBox) {
      setCommandBoxMessage(outcome.keepOpenReason ?? 'Command could not run.');
      return;
    }

    if (outcome.nextSettings) {
      await saveNormalizedSettings({ ...model.settings, ...outcome.nextSettings });
      await hydrateShell();
    }

    if (outcome.openTrash) {
      openTrash();
    }

    if (outcome.undoRecentDelete) {
      await undoRecentTrashDelete();
    }

    closeCommandBox();
  }

  async function saveSpaceBarSettings() {
    const model = shellModel();

    if (!model) {
      return;
    }

    const nextSettings = {
      ...model.settings,
      spaceBarOverflow: spaceBarOverflowInput(),
      spaceBarRowCap: Number(spaceBarRowCapInput()) || 1
    };

    await saveNormalizedSettings(nextSettings);
    await hydrateShell();
  }

  async function saveAddTileVisibility() {
    const model = shellModel();

    if (!model) {
      return;
    }

    await saveNormalizedSettings({
      ...model.settings,
      addTileVisibility: addTileVisibilityInput()
    });
    await hydrateShell();
  }

  async function saveBackgroundImage(file: File | null) {
    if (!file) {
      setBackgroundError('Choose a background image first.');
      return;
    }

    try {
      const metadata = await saveBackgroundFile(file);
      const url = await readBackgroundUrl(metadata, true);
      replaceBackgroundUrl(url);
      setBackgroundUploadFile(null);
      setBackgroundUploadName('');
      setBackgroundError(null);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save background image';
      setBackgroundError(message);
    }
  }

  async function removeBackgroundImage() {
    try {
      const metadata = await loadBackgroundMetadata();
      await clearBackgroundFiles(metadata);
      replaceBackgroundUrl(null);
      setBackgroundUploadFile(null);
      setBackgroundError(null);
      setBackgroundUploadName('');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to remove background image';
      setBackgroundError(message);
    }
  }

  async function setDefaultSpaceFromBar(spaceId: string) {
    const model = shellModel();

    if (!model) {
      return;
    }

    const nextSettings = {
      ...model.settings,
      ...setDefaultSpace(model.settings, spaceId)
    };

    await saveNormalizedSettings(nextSettings);
    await hydrateShell();
  }

  async function reorderDial(dialId: string, direction: 'earlier' | 'later') {
    const model = shellModel();

    if (!model?.library) {
      return;
    }

    const nextLibrary = moveDialWithinSpace(model.library, dialId, direction);
    const nextModel = createSessionShellModel(model, nextLibrary);
    await saveLibrary(nextLibrary);
    setShellModel(nextModel);
    syncSpaceDrafts(nextModel);
  }

  async function moveDialToTrash(dialId: string) {
    const model = shellModel();

    if (!model?.library) {
      return;
    }

    try {
      const nextLibrary = deleteDialToTrash(model.library, dialId);
      const nextModel = createSessionShellModel(model, nextLibrary);

      await saveLibrary(nextLibrary);
      setShellModel(nextModel);
      syncSpaceDrafts(nextModel);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to move Dial to Trash';
      setDialError(message);
    }
  }

  async function restoreTrashDial(dialId: string) {
    const model = shellModel();

    if (!model?.library) {
      return;
    }

    try {
      const nextLibrary = restoreDialFromTrash(model.library, dialId);
      const nextModel = createSessionShellModel(model, nextLibrary);

      await saveLibrary(nextLibrary);
      setShellModel(nextModel);
      syncSpaceDrafts(nextModel);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to restore Dial';
      setSpaceError(message);
    }
  }

  async function undoRecentTrashDelete() {
    const model = shellModel();

    if (!model?.library || !model.activeSpaceId) {
      return;
    }

    const nextLibrary = restoreMostRecentDialFromSpace(model.library, model.activeSpaceId, new Date());

    if (nextLibrary === model.library) {
      setSpaceError('No recently deleted Dial is available for this Space.');
      return;
    }

    const nextModel = createSessionShellModel(model, nextLibrary);
    await saveLibrary(nextLibrary);
    setShellModel(nextModel);
    syncSpaceDrafts(nextModel);
  }

  async function saveTrashRetentionHours() {
    const model = shellModel();

    if (!model) {
      return;
    }

    const nextSettings = {
      ...model.settings,
      trashRetentionHours: trashRetentionHoursInput().trim() ? Number(trashRetentionHoursInput()) : null
    };

    await saveNormalizedSettings(nextSettings);
    await hydrateShell();
  }

  async function permanentlyDeleteDial(dialId: string) {
    const model = shellModel();

    if (!model?.library) {
      return;
    }

    const nextLibrary = permanentlyDeleteTrashDial(model.library, dialId);
    const nextModel = createSessionShellModel(model, nextLibrary);
    await saveLibrary(nextLibrary);
    setShellModel(nextModel);
    syncSpaceDrafts(nextModel);
  }

  async function purgeAllTrash() {
    const model = shellModel();

    if (!model?.library) {
      return;
    }

    if (trashPurgeConfirmation().trim() !== 'PURGE') {
      setSpaceError('Type PURGE to confirm clearing Trash.');
      return;
    }

    const nextLibrary = purgeTrash(model.library);
    const nextModel = createSessionShellModel(model, nextLibrary);
    await saveLibrary(nextLibrary);
    setShellModel(nextModel);
    syncSpaceDrafts(nextModel);
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
      <Show when={backgroundImageUrl()}>
        {(url) => (
          <div
            class="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center opacity-30"
            data-testid="background-preview"
            style={{ 'background-image': `url(${url()})` }}
          />
        )}
      </Show>
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
                        dialEditorError={dialEditorError()}
                        dialEditorForm={dialEditorForm()}
                        dialError={dialError()}
                        dialTitle={dialTitle()}
                        dialUrl={dialUrl()}
                        duplicateDialMatch={duplicateDialMatch()}
                        editingDialId={editingDialId()}
                        hasRestorableDialDraft={hasRestorableDialDraft()}
                        isOverflowMenuOpen={isOverflowMenuOpen()}
                        isSavingDial={isSavingDial()}
                        isSavingSpace={isSavingSpace()}
                        isTrashOpen={isTrashOpen()}
                        newSpaceName={newSpaceName()}
                        renameSpaceName={renameSpaceName()}
                        shellModel={model()}
                        addTileVisibilityInput={addTileVisibilityInput()}
                        spaceBarOverflowInput={spaceBarOverflowInput()}
                        spaceBarRowCapInput={spaceBarRowCapInput()}
                        spaceError={spaceError()}
                        trashPurgeConfirmation={trashPurgeConfirmation()}
                        trashRetentionHoursInput={trashRetentionHoursInput()}
                        onCloseDialEditor={() => closeDialEditor()}
                        onDeleteConfirmationNameInput={setDeleteConfirmationName}
                        onAddTileVisibilityInput={setAddTileVisibilityInput}
                        onDeleteDestinationSpaceIdInput={setDeleteDestinationSpaceId}
                        onPermanentlyDeleteDial={(dialId) => void permanentlyDeleteDial(dialId)}
                        onDialEditorCustomIconInput={(file) => void updateDialEditorCustomIcon(file)}
                        onDialEditorIconModeInput={(value) => updateDialEditorDraftValue({ iconMode: value })}
                        onDialEditorSpaceInput={(value) => updateDialEditorDraftValue({ spaceId: value })}
                        onDialEditorTitleInput={(value) => updateDialEditorDraftValue({ title: value })}
                        onDialEditorUrlInput={(value) => updateDialEditorDraftValue({ url: value })}
                        onDialTitleInput={setDialTitle}
                        onDialUrlInput={setDialUrl}
                        onDiscardDialEditorDraft={() => void discardDialEditorDraft()}
                        onMoveDialToTrash={(dialId) => void moveDialToTrash(dialId)}
                        onReorderDial={(dialId, direction) => void reorderDial(dialId, direction)}
                        onNewSpaceNameInput={setNewSpaceName}
                        onOpenDialEditor={(dialId) => void openDialEditor(dialId)}
                        onOpenOverflowAction={(spaceId) => void switchSpace(spaceId)}
                        onOpenTrash={() => openTrash()}
                        onRemoveActiveSpace={() => void removeActiveSpace()}
                        onRenameSpaceNameInput={setRenameSpaceName}
                        onRestoreDialEditorDraft={() => void restoreDialEditorDraft()}
                        onRestoreTrashDial={(dialId) => void restoreTrashDial(dialId)}
                        onSaveTrashRetentionHours={() => void saveTrashRetentionHours()}
                        onSaveSpaceBarSettings={() => void saveSpaceBarSettings()}
                        onSaveAddTileVisibility={() => void saveAddTileVisibility()}
                        onSaveDefaultSpace={() => void saveDefaultSpace()}
                        onSaveDial={() => void saveDial()}
                        onSaveDialEditor={() => void commitDialEditor()}
                        onSaveNewSpace={() => void saveNewSpace()}
                        onSaveSpaceRename={() => void saveSpaceRename()}
                        onSetDefaultSpaceFromBar={(spaceId) => void setDefaultSpaceFromBar(spaceId)}
                        onSwitchSpace={(spaceId) => void switchSpace(spaceId)}
                        onSpaceBarOverflowInput={setSpaceBarOverflowInput}
                        onSpaceBarRowCapInput={setSpaceBarRowCapInput}
                        onToggleOverflowMenu={() => toggleOverflowMenu()}
                        onTrashPurgeConfirmationInput={setTrashPurgeConfirmation}
                        onTrashRetentionHoursInput={setTrashRetentionHoursInput}
                        onUndoRecentTrashDelete={() => void undoRecentTrashDelete()}
                        onPurgeAllTrash={() => void purgeAllTrash()}
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
                    <SettingRow label="Space overflow" value={`${model().settings.spaceBarOverflow} · cap ${model().settings.spaceBarRowCap}`} />
                    <SettingRow label="Add Tile visibility" value={model().settings.addTileVisibility} />
                  </dl>
                )}
              </Show>
            </div>

            <div class="space-y-3 rounded-2xl border border-dashed border-outline bg-slate-900/60 p-4">
              <p class="text-xs uppercase tracking-[0.28em] text-sky-200/70">Global controls</p>
              <div class="flex flex-wrap gap-2">
                <button
                  type="button"
                  class={`rounded-full border px-3 py-1.5 text-sm transition ${
                    isCommandBoxOpen()
                      ? 'border-sky-300/70 bg-sky-400/20 text-white'
                      : 'border-outline text-slate-200 hover:border-sky-300/60 hover:bg-slate-950/60'
                  }`}
                  onClick={() => openCommandBox()}
                >
                  Command Box
                </button>
                <button
                  type="button"
                  class={`rounded-full border px-3 py-1.5 text-sm transition ${
                    isTrashOpen()
                      ? 'border-sky-300/70 bg-sky-400/20 text-white'
                      : 'border-outline text-slate-200 hover:border-sky-300/60 hover:bg-slate-950/60'
                  }`}
                  onClick={() => openTrash()}
                >
                  Trash
                </button>
                <ToolbarChip label="Settings" />
              </div>

              <div class="space-y-3 rounded-2xl border border-outline bg-slate-950/60 p-4">
                <p class="text-sm text-slate-200">Background image</p>
                <label class="block space-y-2 text-sm text-slate-300">
                  <span>Upload a global background</span>
                  <input
                    accept="image/*"
                    data-testid="background-input"
                    type="file"
                    onInput={(event) => {
                      const file = event.currentTarget.files?.[0] ?? null;
                      setBackgroundUploadFile(file);
                      setBackgroundUploadName(file?.name ?? '');
                    }}
                  />
                </label>
                <div class="flex flex-wrap gap-2">
                  <button
                    type="button"
                    class="rounded-2xl border border-outline px-4 py-3 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-900"
                    onClick={() => void saveBackgroundImage(backgroundUploadFile())}
                  >
                    Apply background
                  </button>
                  <button
                    type="button"
                    class="rounded-2xl border border-outline px-4 py-3 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-900"
                    onClick={() => void removeBackgroundImage()}
                  >
                    Remove background
                  </button>
                </div>
                <Show when={backgroundUploadName()}>
                  <p class="text-sm text-slate-300">Selected: {backgroundUploadName()}</p>
                </Show>
                <Show when={backgroundImageUrl()}>
                  <p class="text-sm text-sky-100">Custom background active</p>
                </Show>
                <Show when={backgroundError()}>
                  <p class="text-sm text-red-200">{backgroundError()}</p>
                </Show>
              </div>

              <p class="text-sm leading-6 text-slate-400">
                The Local Library now supports starter selection, Space lifecycle basics, manual Dial creation,
                reversible delete through Trash, and a persisted global background image.
              </p>
            </div>
          </aside>
        </div>

        <Show when={isCommandBoxOpen() && shellModel()?.library && shellModel()}>
          {(model) => (
            <SearchPanel
              commandEntries={buildCommandEntries({
                settings: model().settings,
                activeSpaceId: model().activeSpaceId,
                hasUndoCandidate:
                  !!model().library &&
                  !!model().activeSpaceId &&
                  restoreMostRecentDialFromSpace(model().library!, model().activeSpaceId!, new Date()) !== model().library,
                isTrashOpen: isTrashOpen()
              })}
              message={commandBoxMessage()}
              query={commandQuery()}
              results={searchDials(model().library!, commandQuery())}
              onClose={() => closeCommandBox()}
              onCommandSelect={(commandId) => void runCommandModeAction(commandId)}
              onQueryInput={setCommandQuery}
            />
          )}
        </Show>
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
  addTileVisibilityInput: 'always' | 'empty-only';
  dialUrl: string;
  dialTitle: string;
  dialError: string | null;
  dialEditorForm: DialDraft | null;
  dialEditorError: string | null;
  duplicateDialMatch: DuplicateDialMatch | null;
  editingDialId: string | null;
  hasRestorableDialDraft: boolean;
  isSavingDial: boolean;
  isTrashOpen: boolean;
  isOverflowMenuOpen: boolean;
  newSpaceName: string;
  renameSpaceName: string;
  deleteConfirmationName: string;
  deleteDestinationSpaceId: string;
  spaceError: string | null;
  trashPurgeConfirmation: string;
  trashRetentionHoursInput: string;
  spaceBarOverflowInput: 'multi-row' | 'scroll' | 'menu';
  spaceBarRowCapInput: string;
  isSavingSpace: boolean;
  onCloseDialEditor: () => void;
  onDialEditorCustomIconInput: (file: File | null) => void;
  onDialEditorIconModeInput: (value: 'favicon' | 'fallback' | 'custom') => void;
  onDialEditorSpaceInput: (value: string) => void;
  onDialEditorTitleInput: (value: string) => void;
  onDialEditorUrlInput: (value: string) => void;
  onDialUrlInput: (value: string) => void;
  onDialTitleInput: (value: string) => void;
  onDiscardDialEditorDraft: () => void;
  onMoveDialToTrash: (dialId: string) => void;
  onOpenTrash: () => void;
  onOpenOverflowAction: (spaceId: string) => void;
  onSaveDial: () => void;
  onNewSpaceNameInput: (value: string) => void;
  onOpenDialEditor: (dialId: string) => void;
  onRestoreTrashDial: (dialId: string) => void;
  onSaveNewSpace: () => void;
  onRenameSpaceNameInput: (value: string) => void;
  onRestoreDialEditorDraft: () => void;
  onSaveDialEditor: () => void;
  onSaveSpaceRename: () => void;
  onSaveDefaultSpace: () => void;
  onAddTileVisibilityInput: (value: 'always' | 'empty-only') => void;
  onDeleteConfirmationNameInput: (value: string) => void;
  onDeleteDestinationSpaceIdInput: (value: string) => void;
  onPermanentlyDeleteDial: (dialId: string) => void;
  onRemoveActiveSpace: () => void;
  onSaveAddTileVisibility: () => void;
  onSaveTrashRetentionHours: () => void;
  onSaveSpaceBarSettings: () => void;
  onReorderDial: (dialId: string, direction: 'earlier' | 'later') => void;
  onSetDefaultSpaceFromBar: (spaceId: string) => void;
  onSwitchSpace: (spaceId: string) => void;
  onSpaceBarOverflowInput: (value: 'multi-row' | 'scroll' | 'menu') => void;
  onSpaceBarRowCapInput: (value: string) => void;
  onToggleOverflowMenu: () => void;
  onTrashPurgeConfirmationInput: (value: string) => void;
  onTrashRetentionHoursInput: (value: string) => void;
  onUndoRecentTrashDelete: () => void;
  onPurgeAllTrash: () => void;
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
  const trashDialSummaries = () =>
    props.shellModel.library ? getTrashDialSummaries(props.shellModel.library) : [];
  let addDialUrlInput: HTMLInputElement | undefined;
  const spaceBarLayout = () =>
    partitionSpacesForBar({
      spaces: (props.shellModel.library?.spaces ?? []).map((space) => ({ id: space.id, name: space.name })),
      mode: props.shellModel.settings.spaceBarOverflow,
      rowCap: props.shellModel.settings.spaceBarRowCap,
      spacesPerRow: 3
    });

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

        <div class="space-y-3" data-testid="space-tabs">
          <div class="flex flex-wrap gap-2">
            <For each={spaceBarLayout().visibleSpaces}>
              {(space) => (
                <button
                  type="button"
                  class={`rounded-full border px-4 py-2 text-sm transition ${
                    !props.isTrashOpen && space.id === props.shellModel.activeSpaceId
                      ? 'border-sky-300/70 bg-sky-400/20 text-white'
                      : 'border-outline bg-slate-900/70 text-slate-200 hover:border-sky-300/40 hover:bg-slate-900'
                  }`}
                  aria-pressed={!props.isTrashOpen && space.id === props.shellModel.activeSpaceId}
                  onClick={() => props.onSwitchSpace(space.id)}
                >
                  {space.name}
                  <Show when={props.shellModel.settings.defaultSpaceId === space.id}>
                    <span class="ml-2 text-xs uppercase tracking-[0.22em] text-sky-200/80">Default</span>
                  </Show>
                </button>
              )}
            </For>

            <Show when={spaceBarLayout().overflowSpaces.length > 0}>
              <button
                type="button"
                class={`rounded-full border px-4 py-2 text-sm transition ${
                  props.isOverflowMenuOpen
                    ? 'border-sky-300/70 bg-sky-400/20 text-white'
                    : 'border-outline bg-slate-900/70 text-slate-200 hover:border-sky-300/40 hover:bg-slate-900'
                }`}
                onClick={() => props.onToggleOverflowMenu()}
              >
                More Spaces ({spaceBarLayout().overflowSpaces.length})
              </button>
            </Show>
          </div>

          <Show when={props.isOverflowMenuOpen && spaceBarLayout().overflowSpaces.length > 0}>
            <div class="grid gap-3 rounded-2xl border border-outline bg-slate-950/60 p-4" data-testid="space-overflow-panel">
              <For each={spaceBarLayout().overflowSpaces}>
                {(space) => (
                  <div class="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-outline bg-slate-900/70 px-4 py-3">
                    <div>
                      <p class="text-sm font-medium text-white">{space.name}</p>
                      <Show when={props.shellModel.settings.defaultSpaceId === space.id}>
                        <p class="mt-1 text-xs uppercase tracking-[0.22em] text-sky-200/80">Default Space</p>
                      </Show>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <button
                        type="button"
                        class="rounded-2xl border border-outline px-3 py-2 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-900"
                        onClick={() => props.onOpenOverflowAction(space.id)}
                      >
                        Open {space.name}
                      </button>
                      <button
                        type="button"
                        class="rounded-2xl border border-outline px-3 py-2 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-900"
                        onClick={() => props.onSetDefaultSpaceFromBar(space.id)}
                      >
                        Set {space.name} as default
                      </button>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </Show>
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

          <Show
            when={!props.isTrashOpen}
            fallback={
              <TrashPanel
                trashDialSummaries={trashDialSummaries()}
                trashPurgeConfirmation={props.trashPurgeConfirmation}
                trashRetentionHoursInput={props.trashRetentionHoursInput}
                onPermanentlyDeleteDial={props.onPermanentlyDeleteDial}
                onPurgeAllTrash={props.onPurgeAllTrash}
                onRestoreTrashDial={props.onRestoreTrashDial}
                onSaveTrashRetentionHours={props.onSaveTrashRetentionHours}
                onTrashPurgeConfirmationInput={props.onTrashPurgeConfirmationInput}
                onTrashRetentionHoursInput={props.onTrashRetentionHoursInput}
              />
            }
          >
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
                  ref={addDialUrlInput}
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

            <Show when={props.dialEditorForm && props.editingDialId}>
              <div class="mt-5 space-y-3 rounded-2xl border border-sky-300/20 bg-slate-950/70 p-4" data-testid="dial-editor">
                <div class="flex items-center justify-between gap-3">
                  <div>
                    <p class="text-xs uppercase tracking-[0.24em] text-sky-200/70">Dial Editor</p>
                    <p class="mt-1 text-sm text-slate-300">Committed changes only apply when you explicitly save.</p>
                  </div>
                  <button
                    type="button"
                    class="rounded-full border border-outline px-3 py-1.5 text-xs text-slate-200 transition hover:border-sky-300/60"
                    onClick={() => props.onCloseDialEditor()}
                  >
                    Close editor
                  </button>
                </div>

                <Show when={props.hasRestorableDialDraft}>
                  <div class="rounded-2xl border border-dashed border-sky-300/20 bg-sky-400/5 p-3 text-sm text-sky-100">
                    <p>A saved draft is available for this Dial.</p>
                    <button
                      type="button"
                      class="mt-3 rounded-2xl border border-sky-300/30 px-3 py-2 text-sm transition hover:border-sky-300/60 hover:bg-sky-400/10"
                      onClick={() => props.onRestoreDialEditorDraft()}
                    >
                      Restore draft
                    </button>
                  </div>
                </Show>

                <div class="grid gap-3 md:grid-cols-2">
                  <label class="space-y-2 text-sm text-slate-300">
                    <span>Edit URL</span>
                    <input
                      class="w-full rounded-2xl border border-outline bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-300/70"
                      value={props.dialEditorForm?.url ?? ''}
                      onInput={(event) => props.onDialEditorUrlInput(event.currentTarget.value)}
                    />
                  </label>
                  <label class="space-y-2 text-sm text-slate-300">
                    <span>Edit title</span>
                    <input
                      class="w-full rounded-2xl border border-outline bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-300/70"
                      value={props.dialEditorForm?.title ?? ''}
                      onInput={(event) => props.onDialEditorTitleInput(event.currentTarget.value)}
                    />
                  </label>
                  <label class="space-y-2 text-sm text-slate-300 md:col-span-2">
                    <span>Space Assignment</span>
                    <select
                      class="w-full rounded-2xl border border-outline bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-300/70"
                      value={props.dialEditorForm?.spaceId ?? ''}
                      onInput={(event) => props.onDialEditorSpaceInput(event.currentTarget.value)}
                    >
                      <For each={props.shellModel.library?.spaces ?? []}>
                        {(space) => <option value={space.id}>{space.name}</option>}
                      </For>
                    </select>
                  </label>
                  <div class="space-y-3 rounded-2xl border border-outline bg-slate-900/60 p-4 md:col-span-2">
                    <div class="flex items-center gap-3">
                      <DialIconAvatar
                        icon={{
                          mode: props.dialEditorForm?.iconMode ?? 'favicon',
                          faviconUrl: null,
                          fallbackText: (props.dialEditorForm?.title.trim()[0] ?? '?').toUpperCase(),
                          customDataUrl: props.dialEditorForm?.customIconDataUrl ?? null
                        }}
                        title={props.dialEditorForm?.title ?? 'Dial preview'}
                        testId="dial-editor-icon-preview"
                      />
                      <div>
                        <p class="text-sm text-white">Dial icon</p>
                        <p class="text-xs text-slate-400">Pick favicon or fallback, or upload a custom icon.</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <button
                        type="button"
                        class="rounded-2xl border border-outline px-3 py-2 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-950/60"
                        onClick={() => props.onDialEditorIconModeInput('favicon')}
                      >
                        Use favicon
                      </button>
                      <button
                        type="button"
                        class="rounded-2xl border border-outline px-3 py-2 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-950/60"
                        onClick={() => props.onDialEditorIconModeInput('fallback')}
                      >
                        Use fallback
                      </button>
                      <button
                        type="button"
                        class="rounded-2xl border border-outline px-3 py-2 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-950/60"
                        disabled={!props.dialEditorForm?.customIconDataUrl}
                        onClick={() => props.onDialEditorIconModeInput('custom')}
                      >
                        Use custom icon
                      </button>
                    </div>
                    <label class="space-y-2 text-sm text-slate-300">
                      <span>Custom icon file</span>
                      <input
                        class="block w-full text-sm text-slate-200 file:mr-4 file:rounded-2xl file:border file:border-outline file:bg-slate-950/70 file:px-4 file:py-2 file:text-sm file:text-white"
                        accept="image/*"
                        type="file"
                        onInput={(event) => props.onDialEditorCustomIconInput(event.currentTarget.files?.[0] ?? null)}
                      />
                    </label>
                  </div>
                </div>

                <Show when={props.duplicateDialMatch}>
                  {(match) => (
                    <p class="text-sm text-amber-200">
                      Duplicate warning: {match().title} in {match().spaceName} already uses this URL.
                    </p>
                  )}
                </Show>
                <Show when={props.dialEditorError}>
                  <p class="text-sm text-red-200">{props.dialEditorError}</p>
                </Show>

                <div class="flex flex-wrap gap-3">
                  <button
                    type="button"
                    class="rounded-2xl border border-sky-300/30 bg-sky-400/10 px-4 py-3 text-sm text-sky-100 transition hover:border-sky-300/60 hover:bg-sky-400/20"
                    onClick={() => props.onSaveDialEditor()}
                  >
                    Save Dial changes
                  </button>
                  <button
                    type="button"
                    class="rounded-2xl border border-outline px-4 py-3 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-900"
                    onClick={() => props.onDiscardDialEditorDraft()}
                  >
                    Discard draft
                  </button>
                </div>
              </div>
            </Show>

            <Show
              when={(activeSpace()?.dials.length ?? 0) > 0}
              fallback={
                <div class="mt-5 rounded-2xl border border-dashed border-outline bg-slate-950/60 p-5 text-sm leading-6 text-slate-300">
                  <p class="font-medium text-white">No Dials yet</p>
                  <p class="mt-2">This Space is empty. Add a Dial above or create another Space to organize more launch targets.</p>
                </div>
              }
            >
              <div class="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3" data-testid="dial-grid">
                <For each={activeSpace()?.dials ?? []}>
                  {(dial) => (
                    <article class="rounded-2xl border border-outline bg-slate-950/60 p-4 transition hover:border-sky-300/60 hover:bg-slate-900" data-testid="dial-card">
                      <a
                        class="block no-underline"
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
                        <div class="flex items-center gap-3">
                          <DialIconAvatar icon={dial.icon} testId={`dial-icon-${dial.id}`} title={dial.title} />
                          <div>
                            <p class="text-sm font-medium text-white">{dial.title}</p>
                            <p class="mt-2 text-sm text-slate-400">{new URL(dial.url).hostname}</p>
                          </div>
                        </div>
                      </a>
                      <div class="mt-4 flex flex-wrap gap-2">
                        <button
                          type="button"
                          class="rounded-2xl border border-outline px-3 py-2 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-950/60"
                          onClick={() => props.onReorderDial(dial.id, 'earlier')}
                        >
                          Move {dial.title} earlier
                        </button>
                        <button
                          type="button"
                          class="rounded-2xl border border-outline px-3 py-2 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-950/60"
                          onClick={() => props.onReorderDial(dial.id, 'later')}
                        >
                          Move {dial.title} later
                        </button>
                        <button
                          type="button"
                          class="rounded-2xl border border-outline px-3 py-2 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-950/60"
                          onClick={() => props.onOpenDialEditor(dial.id)}
                        >
                          Edit {dial.title}
                        </button>
                        <button
                          type="button"
                          class="rounded-2xl border border-red-300/30 px-3 py-2 text-sm text-red-50 transition hover:border-red-200/60 hover:bg-red-400/10"
                          onClick={() => props.onMoveDialToTrash(dial.id)}
                        >
                          Delete {dial.title}
                        </button>
                      </div>
                    </article>
                  )}
                </For>

                <Show when={shouldShowAddTile(props.shellModel.settings, activeSpace()?.dials.length ?? 0)}>
                  <button
                    type="button"
                    class="rounded-2xl border border-dashed border-sky-300/30 bg-sky-400/5 p-4 text-left text-sky-100 transition hover:border-sky-300/60 hover:bg-sky-400/10"
                    onClick={() => addDialUrlInput?.focus()}
                  >
                    <p class="text-sm font-medium">Add Tile</p>
                    <p class="mt-2 text-sm text-sky-100/80">Jump to the add form for this Space.</p>
                  </button>
                </Show>
              </div>
            </Show>
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
            <div class="flex flex-wrap gap-2">
              <button
                type="button"
                class="rounded-2xl border border-outline px-4 py-3 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-900 disabled:cursor-wait disabled:opacity-70"
                disabled={props.isSavingSpace}
                onClick={() => props.onSaveDefaultSpace()}
              >
                Set active Space as default
              </button>
              <button
                type="button"
                class="rounded-2xl border border-outline px-4 py-3 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-900"
                onClick={() => props.onUndoRecentTrashDelete()}
              >
                Undo recent delete
              </button>
              <button
                type="button"
                class="rounded-2xl border border-outline px-4 py-3 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-900"
                onClick={() => props.onOpenTrash()}
              >
                Open Trash
              </button>
            </div>
          </div>

          <div class="space-y-3 rounded-2xl border border-outline bg-slate-950/60 p-4">
            <p class="text-sm text-slate-300">Space bar overflow</p>
            <div class="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,0.55fr)_auto]">
              <label class="space-y-2 text-sm text-slate-300">
                <span>Overflow mode</span>
                <select
                  class="w-full rounded-2xl border border-outline bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-300/70"
                  value={props.spaceBarOverflowInput}
                  onInput={(event) =>
                    props.onSpaceBarOverflowInput(event.currentTarget.value as 'multi-row' | 'scroll' | 'menu')
                  }
                >
                  <option value="multi-row">multi-row</option>
                  <option value="scroll">scroll</option>
                  <option value="menu">menu</option>
                </select>
              </label>
              <label class="space-y-2 text-sm text-slate-300">
                <span>Row cap</span>
                <input
                  class="w-full rounded-2xl border border-outline bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-300/70"
                  value={props.spaceBarRowCapInput}
                  onInput={(event) => props.onSpaceBarRowCapInput(event.currentTarget.value)}
                />
              </label>
              <button
                type="button"
                class="mt-auto rounded-2xl border border-outline px-4 py-3 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-900"
                onClick={() => props.onSaveSpaceBarSettings()}
              >
                Save overflow
              </button>
            </div>
          </div>

          <div class="space-y-3 rounded-2xl border border-outline bg-slate-950/60 p-4">
            <p class="text-sm text-slate-300">Add Tile visibility</p>
            <div class="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto]">
              <label class="space-y-2 text-sm text-slate-300">
                <span>Visibility mode</span>
                <select
                  class="w-full rounded-2xl border border-outline bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-300/70"
                  value={props.addTileVisibilityInput}
                  onInput={(event) =>
                    props.onAddTileVisibilityInput(event.currentTarget.value as 'always' | 'empty-only')
                  }
                >
                  <option value="always">always</option>
                  <option value="empty-only">empty-only</option>
                </select>
              </label>
              <button
                type="button"
                class="mt-auto rounded-2xl border border-outline px-4 py-3 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-900"
                onClick={() => props.onSaveAddTileVisibility()}
              >
                Save Add Tile
              </button>
            </div>
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

function SearchPanel(props: {
  commandEntries: Array<{
    id: 'open-trash' | 'set-launch-new-tab' | 'set-launch-current-tab' | 'undo-recent-delete';
    title: string;
    disabledReason: string | null;
  }>;
  message: string | null;
  query: string;
  results: Array<{
    dialId: string;
    title: string;
    spaceId: string;
    spaceName: string;
    hostname: string;
    url: string;
  }>;
  onClose: () => void;
  onCommandSelect: (commandId: 'open-trash' | 'set-launch-new-tab' | 'set-launch-current-tab' | 'undo-recent-delete') => void;
  onQueryInput: (value: string) => void;
}) {
  const isCommandMode = () => props.query.trim().startsWith('>');
  const commandQuery = () => props.query.trim().replace(/^>\s*/, '').toLowerCase();
  const visibleCommands = () =>
    props.commandEntries.filter((command) =>
      command.title.toLowerCase().includes(commandQuery()) || command.id.toLowerCase().includes(commandQuery())
    );

  return (
    <div class="fixed inset-0 z-20 bg-slate-950/55 p-6 backdrop-blur-sm" data-testid="command-box-panel">
      <div class="mx-auto max-w-2xl rounded-3xl border border-outline bg-slate-950/95 p-5 shadow-panel">
        <div class="flex items-center justify-between gap-3">
          <div>
            <p class="text-xs uppercase tracking-[0.24em] text-sky-200/70">Command Box</p>
            <h4 class="mt-2 text-xl font-semibold text-white">
              {isCommandMode() ? 'Run command mode actions' : 'Search saved Dials'}
            </h4>
          </div>
          <button
            type="button"
            class="rounded-full border border-outline px-3 py-1.5 text-sm text-slate-200 transition hover:border-sky-300/60"
            onClick={() => props.onClose()}
          >
            Close
          </button>
        </div>

        <label class="mt-5 block space-y-2 text-sm text-slate-300">
          <span>Search query</span>
          <input
            class="w-full rounded-2xl border border-outline bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-300/70"
            placeholder="Search titles, hostnames, and URLs or start with > for commands"
            value={props.query}
            onInput={(event) => props.onQueryInput(event.currentTarget.value)}
          />
        </label>

        <Show when={props.message}>
          <p class="mt-4 text-sm text-amber-200">{props.message}</p>
        </Show>

        <div class="mt-5 space-y-3">
          <Show
            when={isCommandMode()}
            fallback={
              <Show
                when={props.results.length > 0}
                fallback={<p class="text-sm text-slate-400">No Dials match yet.</p>}
              >
                <For each={props.results}>
                  {(result) => (
                    <a
                      class="block rounded-2xl border border-outline bg-slate-900/70 p-4 no-underline transition hover:border-sky-300/60 hover:bg-slate-900"
                      href={result.url}
                      onClick={() => props.onClose()}
                    >
                      <p class="text-sm font-medium text-white">{result.title}</p>
                      <p class="mt-1 text-sm text-slate-300">{result.spaceName}</p>
                      <p class="mt-1 text-sm text-slate-400">{result.hostname}</p>
                    </a>
                  )}
                </For>
              </Show>
            }
          >
            <Show
              when={visibleCommands().length > 0}
              fallback={<p class="text-sm text-slate-400">No commands match yet.</p>}
            >
              <For each={visibleCommands()}>
                {(command) => (
                  <button
                    type="button"
                    class="block w-full rounded-2xl border border-outline bg-slate-900/70 p-4 text-left transition hover:border-sky-300/60 hover:bg-slate-900"
                    disabled={command.disabledReason !== null}
                    onClick={() => props.onCommandSelect(command.id)}
                  >
                    <p class="text-sm font-medium text-white">{command.title}</p>
                    <Show when={command.disabledReason}>
                      <p class="mt-1 text-sm text-amber-200">{command.disabledReason}</p>
                    </Show>
                  </button>
                )}
              </For>
            </Show>
          </Show>
        </div>
      </div>
    </div>
  );
}

function DialIconAvatar(props: { icon?: DialIcon; title: string; testId?: string }) {
  const fallbackText = () => props.icon?.fallbackText || (props.title.trim()[0] ?? '?').toUpperCase();
  const imageSrc = () => {
    if (props.icon?.mode === 'custom' && props.icon.customDataUrl) {
      return props.icon.customDataUrl;
    }

    if (props.icon?.mode === 'favicon' && props.icon.faviconUrl) {
      return props.icon.faviconUrl;
    }

    return null;
  };

  return (
    <div
      class="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-outline bg-slate-900 text-sm font-semibold text-white"
      data-testid={props.testId}
    >
      <Show
        when={imageSrc()}
        fallback={<span aria-hidden="true">{fallbackText()}</span>}
      >
        {(src) => <img alt="" class="h-full w-full object-cover" src={src()} />}
      </Show>
    </div>
  );
}

function TrashPanel(props: {
  trashDialSummaries: Array<{
    dialId: string;
    title: string;
    url: string;
    originalSpaceId: string;
    originalSpaceName: string;
    deletedAt: string;
  }>;
  trashPurgeConfirmation: string;
  trashRetentionHoursInput: string;
  onPermanentlyDeleteDial: (dialId: string) => void;
  onPurgeAllTrash: () => void;
  onRestoreTrashDial: (dialId: string) => void;
  onSaveTrashRetentionHours: () => void;
  onTrashPurgeConfirmationInput: (value: string) => void;
  onTrashRetentionHoursInput: (value: string) => void;
}) {
  return (
    <div class="mt-5 space-y-4" data-testid="trash-panel">
      <div class="rounded-2xl border border-outline bg-slate-950/60 p-5">
        <p class="text-xs uppercase tracking-[0.24em] text-sky-200/70">Trash Space</p>
        <h4 class="mt-2 text-xl font-semibold text-white">Deleted Dials</h4>
        <p class="mt-2 text-sm leading-6 text-slate-300">
          Restore a Dial to its original Space identity or launch it from Trash before deciding.
        </p>

        <div class="mt-5 grid gap-3 md:grid-cols-[minmax(0,0.8fr)_auto]">
          <label class="space-y-2 text-sm text-slate-300">
            <span>Trash retention in hours</span>
            <input
              class="w-full rounded-2xl border border-outline bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-300/70"
              placeholder="Leave blank to keep forever"
              value={props.trashRetentionHoursInput}
              onInput={(event) => props.onTrashRetentionHoursInput(event.currentTarget.value)}
            />
          </label>
          <button
            type="button"
            class="mt-auto rounded-2xl border border-outline px-4 py-3 text-sm text-white transition hover:border-sky-300/60 hover:bg-slate-900"
            onClick={() => props.onSaveTrashRetentionHours()}
          >
            Save retention
          </button>
        </div>

        <div class="mt-4 flex flex-wrap gap-3">
          <input
            class="rounded-2xl border border-outline bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300/70"
            placeholder="Type PURGE to confirm"
            value={props.trashPurgeConfirmation}
            onInput={(event) => props.onTrashPurgeConfirmationInput(event.currentTarget.value)}
          />
          <button
            type="button"
            class="rounded-2xl border border-red-300/30 px-4 py-3 text-sm text-red-50 transition hover:border-red-200/60 hover:bg-red-400/10"
            onClick={() => props.onPurgeAllTrash()}
          >
            Purge Trash
          </button>
        </div>
      </div>

      <Show
        when={props.trashDialSummaries.length > 0}
        fallback={
          <div class="rounded-2xl border border-dashed border-outline bg-slate-950/60 p-5 text-sm text-slate-300">
            Trash is empty.
          </div>
        }
      >
        <div class="grid gap-3">
          <For each={props.trashDialSummaries}>
            {(entry) => (
              <article class="rounded-2xl border border-outline bg-slate-950/60 p-4">
                <a class="block no-underline" href={entry.url}>
                  <p class="text-sm font-medium text-white">{entry.title}</p>
                  <p class="mt-2 text-sm text-slate-400">{new URL(entry.url).hostname}</p>
                </a>
                <p class="mt-3 text-sm text-slate-300">Original Space: {entry.originalSpaceName}</p>
                <p class="mt-1 text-sm text-slate-400">Deleted at: {new Date(entry.deletedAt).toLocaleString()}</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    class="rounded-2xl border border-sky-300/30 bg-sky-400/10 px-3 py-2 text-sm text-sky-100 transition hover:border-sky-300/60 hover:bg-sky-400/20"
                    onClick={() => props.onRestoreTrashDial(entry.dialId)}
                  >
                    Restore {entry.title}
                  </button>
                  <button
                    type="button"
                    class="rounded-2xl border border-red-300/30 px-3 py-2 text-sm text-red-50 transition hover:border-red-200/60 hover:bg-red-400/10"
                    onClick={() => props.onPermanentlyDeleteDial(entry.dialId)}
                  >
                    Permanently delete {entry.title}
                  </button>
                </div>
              </article>
            )}
          </For>
        </div>
      </Show>
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
