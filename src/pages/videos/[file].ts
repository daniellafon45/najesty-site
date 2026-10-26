import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { rangeResponse } from '../../lib/rangeResponse';

type AssetsEnv = { ASSETS?: { fetch: (input: Request | string) => Promise<Response> } };

/** Sert /videos/* depuis public/video-files avec prise en charge des requêtes Range. */
export const ALL: APIRoute = async ({ params, request, url }) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method not allowed', { status: 405 });
  }
  const file = String(params.file ?? '');
  if (!/^[\w.-]+\.mp4$/i.test(file)) {
    return new Response('Not found', { status: 404 });
  }

  const assets = (env as unknown as AssetsEnv).ASSETS;
  if (!assets) return new Response('Not found', { status: 404 });

  const asset = await assets.fetch(new URL(`/video-files/${file}`, url).href);
  if (!asset.ok) return new Response('Not found', { status: 404 });

  return rangeResponse(request, await asset.arrayBuffer(), {
    'Content-Type': 'video/mp4',
    'Cache-Control': 'public, max-age=2592000, stale-while-revalidate=86400',
    'X-Content-Type-Options': 'nosniff',
  });
};
