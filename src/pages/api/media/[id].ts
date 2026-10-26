import type { APIRoute } from 'astro';
import { getMediaBinary } from '../../../lib/admin/content';
import { rangeResponse } from '../../../lib/rangeResponse';

export const GET: APIRoute = async ({ params, request }) => {
  const id = String(params.id ?? '').replace(/[^a-f0-9]/gi, '');
  if (!id) {
    return new Response('Not found', { status: 404 });
  }

  const item = await getMediaBinary(id);
  if (!item) {
    return new Response('Not found', { status: 404 });
  }

  return rangeResponse(request, item.bytes, {
    'Content-Type': item.meta.contentType,
    'Cache-Control': 'public, max-age=31536000, immutable',
    'X-Content-Type-Options': 'nosniff',
  });
};
