import type { APIRoute } from 'astro';
import { assertCsrf, requireAdminSession } from '../../../lib/admin/auth';
import {
  getFounderGallery,
  saveFounderGallery,
  type GallerySlide,
} from '../../../lib/admin/content';

const jsonHeaders = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store',
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: jsonHeaders });
}

function normalizeSlides(raw: unknown): GallerySlide[] | null {
  if (!Array.isArray(raw)) return null;
  const slides = raw
    .filter((s) => s && typeof s === 'object')
    .map((s) => {
      const item = s as Record<string, unknown>;
      return {
        src: String(item.src ?? '').trim(),
        alt: String(item.alt ?? '').trim() || 'Photo Najesty',
      };
    })
    .filter((s) => s.src.length > 0 && s.src.length < 500);
  return slides.length > 0 ? slides : [];
}

export const GET: APIRoute = async (context) => {
  const session = await requireAdminSession(context);
  if (!session) return json({ ok: false, error: 'unauthorized' }, 401);
  const slides = await getFounderGallery();
  return json({ ok: true, slides, csrf: session.csrf });
};

export const POST: APIRoute = async (context) => {
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

  const slides = normalizeSlides(body.slides);
  if (slides === null) return json({ ok: false, error: 'validation' }, 400);
  if (slides.length > 24) return json({ ok: false, error: 'too_many' }, 400);

  await saveFounderGallery(slides);
  return json({ ok: true, slides });
};
