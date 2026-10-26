import { afterEach, describe, expect, mock, spyOn, test } from 'bun:test';
import ky from 'ky';
import { createMaimaiProfileHandler } from './maimai';

const profile = { name: 'ｎｙ６４', rating: 13053, syncedAt: '2026-10-18T06:19:00Z' } as const;

afterEach(() => mock.restore());

describe('maishift profile endpoint', () => {
  test('returns unavailable without contacting maishift when no key is configured', async () => {
    const handler = createMaimaiProfileHandler(undefined);

    const response = await handler();

    expect(response.status).toBe(503);
    expect(response.headers.get('cache-control')).toBe('no-store');
    expect(await response.json()).toEqual({ error: 'unavailable' });
  });

  test('shares concurrent upstream requests and caches only the public profile fields', async () => {
    let calls = 0;
    const http = ky.create({ fetch: async (input) => {
      const request = new Request(input);
      calls += 1;
      expect(request.headers.get('x-api-key')).toBe('fixture-key');
      expect(request.url).toBe('https://maimai.shiftpsh.com/api/v1/profiles/ny64?region=intl');
      return Response.json({ profile: { ...profile, friendCode: 'not-for-the-response' } });
    } });
    const handler = createMaimaiProfileHandler('fixture-key', http);

    const responses = await Promise.all([handler(), handler()]);
    const cached = await handler();

    expect(calls).toBe(1);
    for (const response of [...responses, cached]) {
      expect(response.status).toBe(200);
      expect(await response.json()).toEqual({ ...profile, stale: false });
    }
  });

  test('rejects malformed ratings and waits before retrying', async () => {
    let calls = 0;
    const http = ky.create({ fetch: async () => {
      calls += 1;
      return Response.json({ profile: { ...profile, rating: '13053' } });
    } });
    const handler = createMaimaiProfileHandler('fixture-key', http);

    const first = await handler();
    const second = await handler();

    expect(first.status).toBe(503);
    expect(second.status).toBe(503);
    expect(calls).toBe(1);
  });

  test('serves explicitly stale data after a refresh fails without exposing upstream errors', async () => {
    let now = Date.now();
    spyOn(Date, 'now').mockImplementation(() => now);
    let calls = 0;
    const http = ky.create({ fetch: async () => {
      calls += 1;
      return calls === 1 ? Response.json({ profile }) : new Response('fixture-key: upstream failure', { status: 401 });
    } });
    const handler = createMaimaiProfileHandler('fixture-key', http);
    await handler();
    now += 15 * 60 * 1000 + 1;

    const stale = await handler();
    const duringCooldown = await handler();

    expect(calls).toBe(2);
    expect(await stale.json()).toEqual({ ...profile, stale: true });
    expect(stale.headers.get('cache-control')).toBe('public, max-age=60');
    expect(await duringCooldown.json()).toEqual({ ...profile, stale: true });
  });
});
