import { env, serve } from 'bun';
import index from './index.html';
import { createMaimaiProfileHandler } from './server/maimai';

const server = serve({
  routes: {
    '/api/maimai': createMaimaiProfileHandler(env.MAISHIFT_API_KEY),
    '/*': index,
    '/ads.txt': new Response(env.GOOGLE_AD_CODE, { headers: { 'Content-Type': 'text/plain' } }),
    '/app-ads.txt': new Response(env.GOOGLE_AD_CODE, { headers: { 'Content-Type': 'text/plain' } }),
    '/robots.txt': new Response('User-agent: *\nAllow: /ads.txt\nAllow: /app-ads.txt', { headers: { 'Content-Type': 'text/plain' } }),
  },

  development: process.env.NODE_ENV !== 'production' && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
