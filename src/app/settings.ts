import * as v from 'valibot';

export const startPageSettingsSchema = v.object({
  launchTarget: v.optional(v.picklist(['current-tab', 'new-tab']), 'current-tab'),
  reopenBehavior: v.optional(v.picklist(['last-active-space', 'default-space']), 'last-active-space'),
  defaultSpaceId: v.optional(v.nullable(v.string()), null),
  spaceBarOverflow: v.optional(v.picklist(['multi-row', 'scroll', 'menu']), 'multi-row'),
  spaceBarRowCap: v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(6)), 2),
  addTileVisibility: v.optional(v.picklist(['always', 'empty-only']), 'always'),
  trashRetentionHours: v.optional(v.nullable(v.pipe(v.number(), v.minValue(1), v.maxValue(24 * 365))), null)
});

export type StartPageSettings = v.InferOutput<typeof startPageSettingsSchema>;
export type StartPageSettingsInput = v.InferInput<typeof startPageSettingsSchema>;

export const defaultStartPageSettings: StartPageSettings = v.parse(startPageSettingsSchema, {});

export function normalizeStartPageSettings(
  candidate: StartPageSettingsInput | null | undefined
): StartPageSettings {
  return v.parse(startPageSettingsSchema, candidate ?? {});
}
