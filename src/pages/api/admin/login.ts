import type { APIRoute } from 'astro';
import {
  bumpLoginRateLimit,
  checkLoginRateLimit,
  clearSessionCookieHeader,
  createAdminSession,
  sessionCookieHeader,
  verifyAdminPassword,
} from '../../../lib/admin/auth';

const jsonHeaders = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store',
};

export const POST: APIRoute = async ({ request }) => {
  const secure = new URL(request.url).protocol === 'https:';

  if (!request.headers.get('content-type')?.includes('application/json')) {
    return new Response(JSON.stringify({ ok: false, error: 'content-type' }), {
      status: 415,
      headers: jsonHeaders,
    });
  }

  const rate = await checkLoginRateLimit(request);
  if (!rate.ok) {
    return new Response(JSON.stringify({ ok: false, error: 'rate_limit' }), {
      status: 429,
      headers: jsonHeaders,
    });
  }

  let password = '';
  try {
    const body = await request.json();
    password = String(body?.password ?? '');
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'invalid' }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  const valid = await verifyAdminPassword(password);
  if (!valid) {
    await bumpLoginRateLimit(request);
    return new Response(JSON.stringify({ ok: false, error: 'credentials' }), {
      status: 401,
      headers: {
        ...jsonHeaders,
        'Set-Cookie': clearSessionCookieHeader(secure),
      },
    });
  }

  const session = await createAdminSession();
  if (!session) {
    return new Response(JSON.stringify({ ok: false, error: 'kv' }), {
      status: 503,
      headers: jsonHeaders,
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      ...jsonHeaders,
      'Set-Cookie': sessionCookieHeader(session.token, secure),
    },
  });
};
