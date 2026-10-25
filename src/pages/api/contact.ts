import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim();
    const message = String(body?.message ?? '').trim();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'missing' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Placeholder: brancher Resend / Mailchannel / CF Email Workers en prod
    console.log('[contact]', { name, email, message: message.slice(0, 200) });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
