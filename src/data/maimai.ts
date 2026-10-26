import { z } from 'zod/mini';

const profileFields = {
  name: z.string().check(z.minLength(1)),
  rating: z.int().check(z.gte(0)),
  syncedAt: z.iso.datetime({ offset: true }),
} as const;

export const maimaiUpstreamSchema = z.object({ profile: z.object(profileFields) });

export const maimaiProfileSchema = z.object({
  ...profileFields,
  stale: z.boolean(),
});

export type MaimaiProfileData = z.infer<typeof maimaiProfileSchema>;
