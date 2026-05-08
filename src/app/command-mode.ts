import type { StartPageSettings } from './settings';

export type CommandContext = {
  settings: StartPageSettings;
  activeSpaceId: string | null;
  hasUndoCandidate: boolean;
  isTrashOpen: boolean;
};

export type CommandEntry = {
  id: 'open-trash' | 'set-launch-new-tab' | 'set-launch-current-tab' | 'undo-recent-delete';
  title: string;
  disabledReason: string | null;
};

export function buildCommandEntries(context: CommandContext): CommandEntry[] {
  return [
    {
      id: 'open-trash',
      title: context.isTrashOpen ? 'Trash already open' : 'Open Trash',
      disabledReason: context.isTrashOpen ? 'Trash is already open.' : null
    },
    {
      id: 'set-launch-new-tab',
      title: 'Set Launch Preference to new tab',
      disabledReason:
        context.settings.launchTarget === 'new-tab'
          ? 'Launch preference already opens in a new tab.'
          : null
    },
    {
      id: 'set-launch-current-tab',
      title: 'Set Launch Preference to current tab',
      disabledReason:
        context.settings.launchTarget === 'current-tab'
          ? 'Launch preference already opens in the current tab.'
          : null
    },
    {
      id: 'undo-recent-delete',
      title: 'Restore most recently deleted Dial from current Space',
      disabledReason: context.hasUndoCandidate ? null : 'No recently deleted Dial is available for this Space.'
    }
  ];
}

export function executeCommand(commandId: CommandEntry['id'], context: CommandContext): {
  closeCommandBox: boolean;
  keepOpenReason?: string;
  nextSettings?: Partial<StartPageSettings>;
  openTrash?: boolean;
  undoRecentDelete?: boolean;
} {
  const command = buildCommandEntries(context).find((entry) => entry.id === commandId);

  if (!command) {
    return {
      closeCommandBox: false,
      keepOpenReason: 'Command not found.'
    };
  }

  if (command.disabledReason) {
    return {
      closeCommandBox: false,
      keepOpenReason: command.disabledReason
    };
  }

  switch (commandId) {
    case 'open-trash':
      return { closeCommandBox: true, openTrash: true };
    case 'set-launch-new-tab':
      return { closeCommandBox: true, nextSettings: { launchTarget: 'new-tab' } };
    case 'set-launch-current-tab':
      return { closeCommandBox: true, nextSettings: { launchTarget: 'current-tab' } };
    case 'undo-recent-delete':
      return { closeCommandBox: true, undoRecentDelete: true };
  }
}
