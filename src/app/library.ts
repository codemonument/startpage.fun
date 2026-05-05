import * as v from 'valibot';

export const dialSchema = v.object({
  id: v.string(),
  title: v.string(),
  url: v.pipe(v.string(), v.url())
});

export const spaceSchema = v.object({
  id: v.string(),
  name: v.pipe(v.string(), v.minLength(1)),
  dials: v.array(dialSchema)
});

export const localLibrarySchema = v.object({
  version: v.literal(1),
  activeSpaceId: v.string(),
  spaces: v.pipe(v.array(spaceSchema), v.minLength(1))
});

export type Dial = v.InferOutput<typeof dialSchema>;
export type Space = v.InferOutput<typeof spaceSchema>;
export type LocalLibrary = v.InferOutput<typeof localLibrarySchema>;

export function parseLocalLibrary(candidate: unknown): LocalLibrary {
  return v.parse(localLibrarySchema, candidate);
}
