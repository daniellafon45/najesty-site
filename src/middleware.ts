import { defineMiddleware } from 'astro:middleware';
import { readAdminSession } from './lib/admin/auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  const isAdminPage =
    pathname === '/n_admin' ||
    pathname.startsWith('/n_admin/');
  const isAdminApi =
    pathname === '/api/admin' ||
    pathname.startsWith('/api/admin/');
  const isLoginPage = pathname === '/n_admin/login';
  const isLoginApi = pathname === '/api/admin/login';

  if (!isAdminPage && !isAdminApi) {
    return next();
  }

  if (isLoginPage || isLoginApi) {
    return next();
  }

  const session = await readAdminSession(context.request);
  if (!session) {
    if (isAdminApi) {
      return new Response(JSON.stringify({ ok: false, error: 'unauthorized' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      });
    }
    const nextUrl = encodeURIComponent(pathname + context.url.search);
    return context.redirect(`/n_admin/login?next=${nextUrl}`);
  }

  context.locals.adminSession = session;
  return next();
});
