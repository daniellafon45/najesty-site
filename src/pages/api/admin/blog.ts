import type { APIRoute } from 'astro';
import type { BlogLocale, BlogPost } from '../../../data/blog/types';
import { assertCsrf, requireAdminSession } from '../../../lib/admin/auth';
import {
  deleteKvBlogPost,
  getKvBlogPost,
  listKvBlogPosts,
  saveKvBlogPost,
} from '../../../lib/admin/content';

const jsonHeaders = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store',
};

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: jsonHeaders });
}

function normalizePost(raw: Partial<BlogPost>, locale: BlogLocale): BlogPost | null {
  const slug = String(raw.slug ?? '')
    .trim()
    .toLowerCase();
  const title = String(raw.title ?? '').trim();
  if (!slug || !SLUG_RE.test(slug) || slug.length > 80 || !title) return null;

  const now = new Date().toISOString().slice(0, 10);
  return {
    key: String(raw.key ?? slug).trim() || slug,
    slug,
    locale,
    title,
    description: String(raw.description ?? '').trim().slice(0, 320),
    pubDate: String(raw.pubDate ?? now).slice(0, 10),
    updatedDate: now,
    category: (raw.category as BlogPost['category']) || 'pratique',
    audience: (raw.audience as BlogPost['audience']) || 'canada-foyers',
    image: String(raw.image ?? '/images/work/01-featured-najesty.jpg').trim(),
    imageAlt: String(raw.imageAlt ?? title).trim(),
    readingMinutes: Math.max(1, Number(raw.readingMinutes) || 4),
    answerBlock: String(raw.answerBlock ?? '').trim().slice(0, 800),
    sections: Array.isArray(raw.sections)
      ? raw.sections.map((s) => ({
          h2: String(s?.h2 ?? '').trim(),
          paragraphs: Array.isArray(s?.paragraphs)
            ? s.paragraphs.map((p) => String(p))
            : [],
          list: Array.isArray(s?.list) ? s.list.map((x) => String(x)) : undefined,
        }))
      : [{ h2: title, paragraphs: [String(raw.description ?? '')] }],
    faq: Array.isArray(raw.faq)
      ? raw.faq.map((f) => ({
          question: String(f?.question ?? ''),
          answer: String(f?.answer ?? ''),
        }))
      : [],
    cta: {
      title: String(raw.cta?.title ?? 'Parlons de votre espace'),
      body: String(raw.cta?.body ?? ''),
      label: String(raw.cta?.label ?? 'Contact'),
    },
  };
}

export const GET: APIRoute = async (context) => {
  const session = await requireAdminSession(context);
  if (!session) return json({ ok: false, error: 'unauthorized' }, 401);

  const locale = (context.url.searchParams.get('locale') === 'en' ? 'en' : 'fr') as BlogLocale;
  const slug = context.url.searchParams.get('slug');
  if (slug) {
    const post = await getKvBlogPost(context.locals, locale, slug);
    return json({ ok: true, post, csrf: session.csrf });
  }
  const posts = await listKvBlogPosts(context.locals, locale);
  return json({ ok: true, posts, csrf: session.csrf });
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

  const locale = (body.locale === 'en' ? 'en' : 'fr') as BlogLocale;
  const post = normalizePost(body.post as Partial<BlogPost>, locale);
  if (!post) return json({ ok: false, error: 'validation' }, 400);

  await saveKvBlogPost(context.locals, post);
  return json({ ok: true, post });
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

  const locale = (body.locale === 'en' ? 'en' : 'fr') as BlogLocale;
  const slug = String(body.slug ?? '')
    .trim()
    .toLowerCase();
  if (!slug || !SLUG_RE.test(slug)) return json({ ok: false, error: 'validation' }, 400);

  await deleteKvBlogPost(context.locals, locale, slug);
  return json({ ok: true });
};
