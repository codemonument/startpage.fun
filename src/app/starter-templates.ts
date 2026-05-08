import * as v from 'valibot';
import { createDialIconSelection } from './icon-assets';
import { parseLocalLibrary, type LocalLibrary } from './library';

const starterDialSchema = v.object({
  title: v.string(),
  url: v.pipe(v.string(), v.url())
});

const starterSpaceSchema = v.object({
  name: v.pipe(v.string(), v.minLength(1)),
  dials: v.array(starterDialSchema)
});

const starterTemplateSchema = v.object({
  id: v.picklist(['empty', 'example']),
  title: v.string(),
  description: v.string(),
  spaces: v.pipe(v.array(starterSpaceSchema), v.minLength(1), v.maxLength(1))
});

const starterTemplateCollectionSchema = v.pipe(v.array(starterTemplateSchema), v.length(2));

type StarterTemplate = v.InferOutput<typeof starterTemplateSchema>;
export type StarterTemplateId = StarterTemplate['id'];

export const starterTemplates = v.parse(starterTemplateCollectionSchema, [
  {
    id: 'empty',
    title: 'Empty Template',
    description: 'Start with one empty Space and add Dials at your own pace.',
    spaces: [
      {
        name: 'Home',
        dials: []
      }
    ]
  },
  {
    id: 'example',
    title: 'Example Template',
    description: 'See one lean Space with a few real destinations and adapt it from there.',
    spaces: [
      {
        name: 'Home',
        dials: [
          { title: 'Figma', url: 'https://www.figma.com/' },
          { title: 'GitHub', url: 'https://github.com/' },
          { title: 'Linear', url: 'https://linear.app/' },
          { title: 'MDN', url: 'https://developer.mozilla.org/' },
          { title: 'Notion', url: 'https://www.notion.so/' }
        ]
      }
    ]
  }
]);

export function buildLibraryFromStarterTemplate(templateId: StarterTemplateId): LocalLibrary {
  const template = starterTemplates.find((candidate) => candidate.id === templateId);

  if (!template) {
    throw new Error(`Unknown starter template: ${templateId}`);
  }

  const spaces = template.spaces.map((space, spaceIndex) => ({
    id: `${template.id}-space-${spaceIndex + 1}`,
    name: space.name,
    dials: space.dials.map((dial, dialIndex) => ({
      id: `${template.id}-dial-${spaceIndex + 1}-${dialIndex + 1}`,
      title: dial.title,
      url: dial.url,
      icon: createDialIconSelection(dial.url, dial.title)
    }))
  }));

  return parseLocalLibrary({
    version: 1,
    activeSpaceId: spaces[0]?.id,
    spaces
  });
}

export function shouldOfferStarterTemplates(snapshot: { hasLibrary: boolean }): boolean {
  return !snapshot.hasLibrary;
}
