import { describe, expect, it } from 'vitest';
import {
  applyDialDraft,
  buildDialEditorSession,
  discardDialDraft,
  findDuplicateDialUrl,
  updateDialFromEditor
} from './dial-editor';

const sampleLibrary = {
  version: 1 as const,
  activeSpaceId: 'space-1',
  spaces: [
    {
      id: 'space-1',
      name: 'Home',
      dials: [
        { id: 'dial-1', title: 'Docs', url: 'https://docs.example.com/' },
        { id: 'dial-2', title: 'GitHub', url: 'https://github.com/' }
      ]
    },
    {
      id: 'space-2',
      name: 'Work',
      dials: []
    }
  ]
};

describe('findDuplicateDialUrl', () => {
  it('warns when another active Dial already uses the same normalized URL', () => {
    expect(findDuplicateDialUrl(sampleLibrary, 'dial-1', 'github.com')).toEqual({
      dialId: 'dial-2',
      title: 'GitHub',
      spaceId: 'space-1',
      spaceName: 'Home',
      url: 'https://github.com/'
    });
  });

  it('ignores the Dial currently being edited', () => {
    expect(findDuplicateDialUrl(sampleLibrary, 'dial-2', 'github.com')).toBeNull();
  });
});

describe('buildDialEditorSession', () => {
  it('opens from committed data and only advertises a draft for restore', () => {
    expect(
      buildDialEditorSession(
        { id: 'dial-1', title: 'Docs', url: 'https://docs.example.com/', spaceId: 'space-1' },
        {
          title: 'Draft docs',
          url: 'draft.example.com',
          spaceId: 'space-2',
          iconMode: 'fallback',
          customIconDataUrl: null
        }
      )
    ).toEqual({
      form: {
        title: 'Docs',
        url: 'https://docs.example.com/',
        spaceId: 'space-1',
        iconMode: 'favicon',
        customIconDataUrl: null
      },
      hasRestorableDraft: true
    });
  });
});

describe('applyDialDraft', () => {
  it('restores saved draft values intentionally', () => {
    expect(
      applyDialDraft(
        {
          title: 'Docs',
          url: 'https://docs.example.com/',
          spaceId: 'space-1',
          iconMode: 'favicon',
          customIconDataUrl: null
        },
        {
          title: 'Draft docs',
          url: 'draft.example.com',
          spaceId: 'space-2',
          iconMode: 'fallback',
          customIconDataUrl: null
        }
      )
    ).toEqual({
      title: 'Draft docs',
      url: 'draft.example.com',
      spaceId: 'space-2',
      iconMode: 'fallback',
      customIconDataUrl: null
    });
  });
});

describe('discardDialDraft', () => {
  it('clears saved draft state only when the user explicitly discards it', () => {
    expect(discardDialDraft()).toBeNull();
  });
});

describe('updateDialFromEditor', () => {
  it('commits the final saved edit and moves the Dial into another Space when requested', () => {
    const nextLibrary = updateDialFromEditor(sampleLibrary, 'dial-1', {
      title: 'Project docs',
      url: 'project.example.com',
      spaceId: 'space-2',
      iconMode: 'favicon',
      customIconDataUrl: null
    });

    expect(nextLibrary.spaces[0]?.dials).toEqual([{ id: 'dial-2', title: 'GitHub', url: 'https://github.com/' }]);
    expect(nextLibrary.spaces[1]?.dials).toEqual([
      {
        id: 'dial-1',
        title: 'Project docs',
        url: 'https://project.example.com/',
        icon: {
          mode: 'favicon',
          faviconUrl: 'https://project.example.com/favicon.ico',
          fallbackText: 'P',
          customDataUrl: null
        }
      }
    ]);
  });

  it('keeps saved custom icon metadata when the Dial is edited later', () => {
    const nextLibrary = updateDialFromEditor(
      {
        ...sampleLibrary,
        spaces: [
          {
            ...sampleLibrary.spaces[0],
            dials: [
              {
                id: 'dial-1',
                title: 'Docs',
                url: 'https://docs.example.com/',
                icon: {
                  mode: 'custom',
                  faviconUrl: 'https://docs.example.com/favicon.ico',
                  fallbackText: 'D',
                  customDataUrl: 'data:image/svg+xml;base64,abc'
                }
              },
              sampleLibrary.spaces[0].dials[1]
            ]
          },
          sampleLibrary.spaces[1]
        ]
      },
      'dial-1',
      {
        title: 'Docs updated',
        url: 'https://docs.example.com/path',
        spaceId: 'space-1',
        iconMode: 'custom',
        customIconDataUrl: 'data:image/svg+xml;base64,abc'
      }
    );

    expect(nextLibrary.spaces[0]?.dials[0]).toMatchObject({
      icon: {
        mode: 'custom',
        customDataUrl: 'data:image/svg+xml;base64,abc'
      }
    });
  });
});
