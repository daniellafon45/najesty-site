import type { APIRoute } from 'astro';
import { assertCsrf, requireAdminSession } from '../../../lib/admin/auth';
import { randomToken } from '../../../lib/admin/crypto';
import {
  deleteMedia,
  listMedia,
  mediaPublicUrl,
  saveMedia,
  type MediaMeta,
} from '../../../lib/admin/content';

const jsonHeaders = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store',
};

const ALLOWED = new Set(['image/jpeg', 'image/png', 'image/webp']);
const MAX_BYTES = 2 * 1024 * 1024;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: jsonHeaders });
}

export const GET: APIRoute = async (context) => {
  const session = await requireAdminSession(context);
  if (!session) return json({ ok: false, error: 'unauthorized' }, 401);
  const items = await listMedia();
  return json({
    ok: true,
    csrf: session.csrf,
    items: items.map((m) => ({ ...m, url: mediaPublicUrl(m.id) })),
  });
};

export const POST: APIRoute = async (context) => {
  const session = await requireAdminSession(context);
  if (!session) return json({ ok: false, error: 'unauthorized' }, 401);

  const form = await context.request.formData();
  const csrf = String(form.get('csrf') ?? '');
  if (!assertCsrf(session.csrf, csrf)) return json({ ok: false, error: 'csrf' }, 403);

  const file = form.get('file');
  if (!(file instanceof File)) return json({ ok: false, error: 'file' }, 400);
  if (!ALLOWED.has(file.type)) return json({ ok: false, error: 'mime' }, 400);
  if (file.size <= 0 || file.size > MAX_BYTES) {
    return json({ ok: false, error: 'size' }, 400);
  }

  const id = randomToken(16);
  const bytes = await file.arrayBuffer();
  const meta: MediaMeta = {
    id,
    contentType: file.type,
    alt: String(form.get('alt') ?? file.name).trim().slice(0, 160),
    createdAt: new Date().toISOString(),
    size: file.size,
  };
  await saveMedia(meta, bytes);
  return json({ ok: true, item: { ...meta, url: mediaPublicUrl(id) } });
};

export const DELETE: APIRoute = async (context) => {
  const session = await requireAdminSession(context);
  if (!session) return json({ ok: false, error: 'unauthorized' }, 401);

  let body: Record<string, unknown>;
  try {
    body = await context.request.json();
  } catch {
    return json({ ok: false, error: 'invalid' }, 400);
  }
  if (!assertCsrf(session.csrf, String(body.csrf ?? ''))) {
    return json({ ok: false, error: 'csrf' }, 403);
  }
  const id = String(body.id ?? '').replace(/[^a-f0-9]/gi, '');
  if (!id) return json({ ok: false, error: 'validation' }, 400);
  await deleteMedia(id);
  return json({ ok: true });
};
