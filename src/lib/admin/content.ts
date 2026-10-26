import type { BlogLocale, BlogPost } from '../../data/blog/types';
import { contentKv } from './env';

export type MediaMeta = {
  id: string;
  contentType: string;
  alt: string;
  createdAt: string;
  size: number;
};

export async function listKvBlogSlugs(locale: BlogLocale): Promise<string[]> {
  const store = contentKv();
  if (!store) return [];
  const raw = await store.get(`blog:index:${locale}`);
  if (!raw) return [];
  try {
    const list = JSON.parse(raw) as string[];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export async function getKvBlogPost(
  locale: BlogLocale,
  slug: string,
): Promise<BlogPost | null> {
  const store = contentKv();
  if (!store) return null;
  const raw = await store.get(`blog:post:${locale}:${slug}`);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as BlogPost;
  } catch {
    return null;
  }
}

export async function listKvBlogPosts(locale: BlogLocale): Promise<BlogPost[]> {
  const slugs = await listKvBlogSlugs(locale);
  const posts: BlogPost[] = [];
  for (const slug of slugs) {
    const post = await getKvBlogPost(locale, slug);
    if (post) posts.push(post);
  }
  return posts.sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
  );
}

export async function saveKvBlogPost(post: BlogPost): Promise<void> {
  const store = contentKv();
  if (!store) throw new Error('CONTENT KV unavailable');
  const slugs = await listKvBlogSlugs(post.locale);
  if (!slugs.includes(post.slug)) slugs.unshift(post.slug);
  await store.put(`blog:post:${post.locale}:${post.slug}`, JSON.stringify(post));
  await store.put(`blog:index:${post.locale}`, JSON.stringify(slugs));
}

export async function deleteKvBlogPost(
  locale: BlogLocale,
  slug: string,
): Promise<void> {
  const store = contentKv();
  if (!store) throw new Error('CONTENT KV unavailable');
  const slugs = (await listKvBlogSlugs(locale)).filter((s) => s !== slug);
  await store.delete(`blog:post:${locale}:${slug}`);
  await store.put(`blog:index:${locale}`, JSON.stringify(slugs));
}

export async function listMedia(): Promise<MediaMeta[]> {
  const store = contentKv();
  if (!store) return [];
  const raw = await store.get('media:index');
  if (!raw) return [];
  let ids: string[] = [];
  try {
    ids = JSON.parse(raw) as string[];
  } catch {
    return [];
  }
  const items: MediaMeta[] = [];
  for (const id of ids) {
    const metaRaw = await store.get(`media:meta:${id}`);
    if (!metaRaw) continue;
    try {
      items.push(JSON.parse(metaRaw) as MediaMeta);
    } catch {
      /* skip */
    }
  }
  return items;
}

export async function saveMedia(meta: MediaMeta, bytes: ArrayBuffer): Promise<void> {
  const store = contentKv();
  if (!store) throw new Error('CONTENT KV unavailable');
  const index = (await listMedia()).map((m) => m.id);
  if (!index.includes(meta.id)) index.unshift(meta.id);
  await store.put(`media:bin:${meta.id}`, bytes);
  await store.put(`media:meta:${meta.id}`, JSON.stringify(meta));
  await store.put('media:index', JSON.stringify(index));
}

export async function getMediaBinary(
  id: string,
): Promise<{ meta: MediaMeta; bytes: ArrayBuffer } | null> {
  const store = contentKv();
  if (!store) return null;
  const [metaRaw, bytes] = await Promise.all([
    store.get(`media:meta:${id}`),
    store.get(`media:bin:${id}`, 'arrayBuffer'),
  ]);
  if (!metaRaw || !bytes) return null;
  try {
    return { meta: JSON.parse(metaRaw) as MediaMeta, bytes };
  } catch {
    return null;
  }
}

export async function deleteMedia(id: string): Promise<void> {
  const store = contentKv();
  if (!store) throw new Error('CONTENT KV unavailable');
  const index = (await listMedia()).map((m) => m.id).filter((x) => x !== id);
  await store.delete(`media:bin:${id}`);
  await store.delete(`media:meta:${id}`);
  await store.put('media:index', JSON.stringify(index));
}

export function mediaPublicUrl(id: string): string {
  return `/api/media/${id}`;
}
