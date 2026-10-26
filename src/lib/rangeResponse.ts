/**
 * Réponse vidéo compatible Safari / iOS : Safari exige des réponses 206 aux
 * requêtes `Range`, ce que les assets statiques Cloudflare ne renvoient pas.
 */
export function rangeResponse(
  request: Request,
  bytes: ArrayBuffer,
  headers: Record<string, string>,
): Response {
  const size = bytes.byteLength;
  const base = { ...headers, 'Accept-Ranges': 'bytes' };
  const range = request.headers.get('Range');
  const match = range ? /^bytes=(\d*)-(\d*)$/.exec(range.trim()) : null;

  if (!match || (match[1] === '' && match[2] === '')) {
    return new Response(request.method === 'HEAD' ? null : bytes, {
      status: 200,
      headers: { ...base, 'Content-Length': String(size) },
    });
  }

  let start: number;
  let end: number;
  if (match[1] === '') {
    // Suffixe : les N derniers octets
    start = Math.max(0, size - Number(match[2]));
    end = size - 1;
  } else {
    start = Number(match[1]);
    end = match[2] === '' ? size - 1 : Math.min(Number(match[2]), size - 1);
  }

  if (start >= size || start > end) {
    return new Response(null, {
      status: 416,
      headers: { ...base, 'Content-Range': `bytes */${size}` },
    });
  }

  return new Response(request.method === 'HEAD' ? null : bytes.slice(start, end + 1), {
    status: 206,
    headers: {
      ...base,
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Content-Length': String(end - start + 1),
    },
  });
}
