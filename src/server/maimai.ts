import ky, { type KyInstance } from 'ky';
import { maimaiUpstreamSchema, type MaimaiProfileData } from '@/data/maimai';

const CACHE_MS = 15 * 60 * 1000;
const RETRY_MS = 60 * 1000;

export function createMaimaiProfileHandler(apiKey: string | undefined, http: KyInstance = ky) {
  let cache: { readonly data: MaimaiProfileData; readonly expiresAt: number } | undefined;
  let pending: Promise<MaimaiProfileData | null> | undefined;
  let retryAfter = 0;

  async function loadProfile(): Promise<MaimaiProfileData | null> {
    if (!apiKey) return null;
    if (cache && Date.now() < cache.expiresAt) return cache.data;
    if (Date.now() < retryAfter) return cache ? { ...cache.data, stale: true } : null;

    if (!pending) {
      pending = http
        .get('https://maimai.shiftpsh.com/api/v1/profiles/ny64', {
          searchParams: { region: 'intl' },
          headers: { 'X-API-Key': apiKey },
          timeout: 4000,
          retry: 0,
        })
        .json<unknown>()
        .then((body) => {
          const { profile } = maimaiUpstreamSchema.parse(body);
          const data = { ...profile, stale: false };
          cache = { data, expiresAt: Date.now() + CACHE_MS };
          return data;
        })
        .catch((error: unknown) => {
          if (!(error instanceof Error)) throw error;
          retryAfter = Date.now() + RETRY_MS;
          return cache ? { ...cache.data, stale: true } : null;
        })
        .finally(() => {
          pending = undefined;
        });
    }
    return pending;
  }

  return async function getMaimaiProfile(): Promise<Response> {
    const data = await loadProfile();
    if (!data) {
      return Response.json({ error: 'unavailable' }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
    }
    return Response.json(data, {
      headers: { 'Cache-Control': data.stale ? 'public, max-age=60' : 'public, max-age=300' },
    });
  };
}
