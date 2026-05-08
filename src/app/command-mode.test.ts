import { describe, expect, it } from 'vitest';
import { buildCommandEntries, executeCommand } from './command-mode';

const sampleContext = {
  settings: {
    launchTarget: 'current-tab' as const,
    reopenBehavior: 'last-active-space' as const,
    defaultSpaceId: null,
    spaceBarOverflow: 'multi-row' as const,
    spaceBarRowCap: 2,
    addTileVisibility: 'always' as const,
    trashRetentionHours: null
  },
  activeSpaceId: 'space-1',
  hasUndoCandidate: false,
  isTrashOpen: false
};

describe('buildCommandEntries', () => {
  it('keeps disabled commands visible with an inline reason', () => {
    const commands = buildCommandEntries(sampleContext);
    const undoCommand = commands.find((command) => command.id === 'undo-recent-delete');

    expect(undoCommand).toMatchObject({
      disabledReason: 'No recently deleted Dial is available for this Space.'
    });
  });

  it('includes direct settings actions for launch preference changes', () => {
    expect(buildCommandEntries(sampleContext).map((command) => command.id)).toContain('set-launch-new-tab');
  });
});

describe('executeCommand', () => {
  it('closes the Command Box after a successful direct settings action', () => {
    expect(executeCommand('set-launch-new-tab', sampleContext)).toMatchObject({
      closeCommandBox: true,
      nextSettings: {
        launchTarget: 'new-tab'
      }
    });
  });

  it('keeps the Command Box open when the selected command is disabled', () => {
    expect(executeCommand('undo-recent-delete', sampleContext)).toMatchObject({
      closeCommandBox: false,
      keepOpenReason: 'No recently deleted Dial is available for this Space.'
    });
  });
});
