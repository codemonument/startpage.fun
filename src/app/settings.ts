import * as v from 'valibot';

export const startPageSettingsSchema = v.object({
  launchTarget: v.optional(v.picklist(['current-tab', 'new-tab']), 'current-tab'),
  reopenBehavior: v.optional(v.picklist(['last-active-space', 'default-space']), 'last-active-space'),
  defaultSpaceId: v.optional(v.nullable(v.string()), null),
  spaceBarOverflow: v.optional(v.picklist(['multi-row', 'scroll', 'menu']), 'multi-row'),
  addTileVisibility: v.optional(v.picklist(['always', 'empty-only']), 'always')
});

export type StartPageSettings = v.InferOutput<typeof startPageSettingsSchema>;
export type StartPageSettingsInput = v.InferInput<typeof startPageSettingsSchema>;

export const defaultStartPageSettings: StartPageSettings = v.parse(startPageSettingsSchema, {});

export function normalizeStartPageSettings(
  candidate: StartPageSettingsInput | null | undefined
): StartPageSettings {
  return v.parse(startPageSettingsSchema, candidate ?? {});
}
