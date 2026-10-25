import type { APIRoute } from 'astro';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_PHONE = 40;
const MAX_MESSAGE = 4000;

export const POST: APIRoute = async ({ request }) => {
  const jsonHeaders = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };

  if (request.headers.get('content-type')?.includes('application/json') !== true) {
    return new Response(JSON.stringify({ ok: false, error: 'content-type' }), {
      status: 415,
      headers: jsonHeaders,
    });
  }

  try {
    const body = await request.json();
    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim().toLowerCase();
    const phone = String(body?.phone ?? '').trim();
    const message = String(body?.message ?? '').trim();
    const honeypot = String(body?.company ?? '').trim();

    // Bot trap — champ non visible côté UI
    if (honeypot) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: jsonHeaders,
      });
    }

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'missing' }), {
        status: 400,
        headers: jsonHeaders,
      });
    }

    if (
      name.length > MAX_NAME ||
      email.length > MAX_EMAIL ||
      phone.length > MAX_PHONE ||
      message.length > MAX_MESSAGE ||
      !EMAIL_RE.test(email)
    ) {
      return new Response(JSON.stringify({ ok: false, error: 'invalid' }), {
        status: 400,
        headers: jsonHeaders,
      });
    }

    // Placeholder: brancher Resend / Mailchannel / CF Email Workers en prod
    console.log('[contact]', {
      name: name.slice(0, 80),
      email,
      phone: phone.slice(0, 40),
      message: message.slice(0, 200),
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: jsonHeaders,
    });
  } catch {
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: jsonHeaders,
    });
  }
};
