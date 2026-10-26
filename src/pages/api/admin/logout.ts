import type { APIRoute } from 'astro';
import {
  clearSessionCookieHeader,
  destroyAdminSession,
  parseCookies,
  ADMIN_COOKIE,
} from '../../../lib/admin/auth';

export const POST: APIRoute = async ({ request }) => {
  const secure = new URL(request.url).protocol === 'https:';
  const cookies = parseCookies(request.headers.get('cookie'));
  await destroyAdminSession(cookies[ADMIN_COOKIE]);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'Set-Cookie': clearSessionCookieHeader(secure),
    },
  });
};
