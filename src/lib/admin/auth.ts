import type { APIContext } from 'astro';
import { adminPassword, contentKv } from './env';
import { randomToken, sha256Hex, timingSafeEqualString } from './crypto';

export const ADMIN_COOKIE = 'najesty_admin';
export const SESSION_TTL_SECONDS = 60 * 60 * 12;
const RATE_LIMIT_WINDOW = 60 * 15;
const RATE_LIMIT_MAX = 5;

type SessionRecord = {
  csrf: string;
  createdAt: number;
};

export function parseCookies(header: string | null): Record<string, string> {
  if (!header) return {};
  return Object.fromEntries(
    header.split(';').map((part) => {
      const [k, ...rest] = part.trim().split('=');
      return [k, decodeURIComponent(rest.join('=') || '')];
    }),
  );
}

export function sessionCookieHeader(token: string, secure: boolean): string {
  const parts = [
    `${ADMIN_COOKIE}=${encodeURIComponent(token)}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Strict',
    `Max-Age=${SESSION_TTL_SECONDS}`,
  ];
  if (secure) parts.push('Secure');
  return parts.join('; ');
}

export function clearSessionCookieHeader(secure: boolean): string {
  const parts = [
    `${ADMIN_COOKIE}=`,
    'Path=/',
    'HttpOnly',
    'SameSite=Strict',
    'Max-Age=0',
  ];
  if (secure) parts.push('Secure');
  return parts.join('; ');
}

function clientIp(request: Request): string {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  );
}

export async function checkLoginRateLimit(
  request: Request,
): Promise<{ ok: boolean; remaining: number }> {
  const kv = contentKv();
  if (!kv) return { ok: false, remaining: 0 };
  const key = `admin:ratelimit:${clientIp(request)}`;
  const raw = await kv.get(key);
  const count = raw ? Number(raw) : 0;
  if (count >= RATE_LIMIT_MAX) return { ok: false, remaining: 0 };
  return { ok: true, remaining: RATE_LIMIT_MAX - count };
}

export async function bumpLoginRateLimit(request: Request): Promise<void> {
  const kv = contentKv();
  if (!kv) return;
  const key = `admin:ratelimit:${clientIp(request)}`;
  const raw = await kv.get(key);
  const count = raw ? Number(raw) : 0;
  await kv.put(key, String(count + 1), { expirationTtl: RATE_LIMIT_WINDOW });
}

export async function verifyAdminPassword(password: string): Promise<boolean> {
  const expected = adminPassword();
  if (!expected || !password) return false;
  return timingSafeEqualString(password, expected);
}

export async function createAdminSession(): Promise<{
  token: string;
  csrf: string;
} | null> {
  const kv = contentKv();
  if (!kv) return null;
  const token = randomToken(32);
  const csrf = randomToken(24);
  const tokenHash = await sha256Hex(token);
  const record: SessionRecord = { csrf, createdAt: Date.now() };
  await kv.put(`admin:session:${tokenHash}`, JSON.stringify(record), {
    expirationTtl: SESSION_TTL_SECONDS,
  });
  return { token, csrf };
}

export async function destroyAdminSession(token: string | undefined): Promise<void> {
  const kv = contentKv();
  if (!kv || !token) return;
  const tokenHash = await sha256Hex(token);
  await kv.delete(`admin:session:${tokenHash}`);
}

export async function readAdminSession(
  request: Request,
): Promise<{ token: string; csrf: string } | null> {
  const kv = contentKv();
  if (!kv) return null;
  const cookies = parseCookies(request.headers.get('cookie'));
  const token = cookies[ADMIN_COOKIE];
  if (!token) return null;
  const tokenHash = await sha256Hex(token);
  const raw = await kv.get(`admin:session:${tokenHash}`);
  if (!raw) return null;
  try {
    const record = JSON.parse(raw) as SessionRecord;
    if (!record?.csrf) return null;
    return { token, csrf: record.csrf };
  } catch {
    return null;
  }
}

export async function requireAdminSession(
  context: Pick<APIContext, 'request'>,
): Promise<{ token: string; csrf: string } | null> {
  return readAdminSession(context.request);
}

export function assertCsrf(sessionCsrf: string, provided: string | null | undefined): boolean {
  if (!provided) return false;
  return sessionCsrf === provided;
}
