/**
 * Cloudflare Pages Function — só para /videos/*.
 *
 * O Pages serve arquivos estáticos ignorando o cabeçalho Range (sempre 200 com o arquivo
 * inteiro). O Safari (iPhone/Mac) exige respostas parciais (206) para tocar <video>, então
 * esta função busca o arquivo estático e devolve apenas o trecho pedido.
 */

const CACHE = "public, max-age=2592000";

export async function onRequestHead({ request, env }) {
  const asset = await env.ASSETS.fetch(new Request(request.url, { method: "HEAD" }));
  const headers = new Headers(asset.headers);
  headers.set("Accept-Ranges", "bytes");
  headers.set("Cache-Control", CACHE);
  return new Response(null, { status: asset.status, headers });
}

export async function onRequestGet({ request, env }) {
  const range = request.headers.get("Range");
  // Busca o arquivo sem o Range (o servidor de arquivos estáticos não o entende).
  let asset = await env.ASSETS.fetch(new Request(request.url));
  let size = Number(asset.headers.get("Content-Length"));
  if (range && asset.status === 200 && !size) {
    // Sem Content-Length (ex.: emulador local): lê o arquivo para saber o tamanho.
    const buf = await asset.arrayBuffer();
    size = buf.byteLength;
    asset = new Response(buf, asset);
  }

  const headers = new Headers(asset.headers);
  headers.set("Accept-Ranges", "bytes");
  headers.set("Cache-Control", CACHE);

  const match = range && /^bytes=(\d*)-(\d*)$/.exec(range.trim());
  if (!match || asset.status !== 200 || !size || (!match[1] && !match[2])) {
    return new Response(asset.body, { status: asset.status, headers });
  }

  // bytes=início-fim | bytes=início- | bytes=-últimos
  let start = match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2]));
  let end = match[1] && match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
  if (start >= size || start > end) {
    asset.body?.cancel();
    return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}`, "Accept-Ranges": "bytes" } });
  }

  headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  headers.set("Content-Length", String(end - start + 1));
  return new Response(asset.body.pipeThrough(slice(start, end)), { status: 206, headers });
}

/** Repassa só os bytes [start, end] do fluxo e encerra a leitura ao chegar no fim. */
function slice(start, end) {
  let offset = 0;
  return new TransformStream({
    transform(chunk, controller) {
      const from = offset;
      offset += chunk.byteLength;
      if (offset <= start) return; // ainda antes do trecho
      const a = Math.max(0, start - from);
      const b = Math.min(chunk.byteLength, end - from + 1);
      if (b > a) controller.enqueue(chunk.subarray(a, b));
      if (offset > end) controller.terminate();
    },
  });
}
