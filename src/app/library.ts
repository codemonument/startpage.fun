import * as v from 'valibot';

export const dialIconSchema = v.object({
  mode: v.picklist(['favicon', 'fallback', 'custom']),
  faviconUrl: v.nullable(v.string()),
  fallbackText: v.string(),
  customDataUrl: v.nullable(v.string())
});

export const dialSchema = v.object({
  id: v.string(),
  title: v.string(),
  url: v.pipe(v.string(), v.url()),
  icon: v.optional(dialIconSchema)
});

export const trashedDialSchema = v.object({
  dial: dialSchema,
  originalSpaceId: v.string(),
  originalSpaceName: v.string(),
  originalDialIndex: v.pipe(v.number(), v.integer()),
  deletedAt: v.string()
});

export const spaceSchema = v.object({
  id: v.string(),
  name: v.pipe(v.string(), v.minLength(1)),
  dials: v.array(dialSchema)
});

export const localLibrarySchema = v.object({
  version: v.literal(1),
  activeSpaceId: v.string(),
  spaces: v.pipe(v.array(spaceSchema), v.minLength(1)),
  trash: v.optional(v.array(trashedDialSchema))
});

export type DialIcon = v.InferOutput<typeof dialIconSchema>;
export type Dial = v.InferOutput<typeof dialSchema>;
export type TrashedDial = v.InferOutput<typeof trashedDialSchema>;
export type Space = v.InferOutput<typeof spaceSchema>;
export type LocalLibrary = v.InferOutput<typeof localLibrarySchema>;

export function parseLocalLibrary(candidate: unknown): LocalLibrary {
  return v.parse(localLibrarySchema, candidate);
}
