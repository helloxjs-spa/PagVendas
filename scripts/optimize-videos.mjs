/**
 * Comprime os depoimentos em vídeo para servir no próprio site (Cloudflare Pages).
 *
 * Origem:  assets-src/videos/*.{mp4,mov}  (originais do celular, fora do git e do deploy)
 * Destino: public/videos/<nome>.mp4       (H.264 720×1280, "faststart": começa a tocar antes de baixar tudo)
 *          public/videos/<nome>.jpg       (capa: um quadro do vídeo)
 *
 * O teto de bitrate mantém cada arquivo bem abaixo do limite de 25 MiB do Pages
 * mesmo em vídeos de ~2min30.
 *
 * Quadro da capa: por padrão, 1s. Para escolher outro, ajuste POSTER_AT (segundos).
 * Vídeos já comprimidos e mais novos que o original não são refeitos (só a capa);
 * apague o .mp4 em public/videos/ para forçar.
 *
 * Uso: npm i --no-save ffmpeg-static   (só na primeira vez; fica fora do package.json para não
 *                                        pesar os builds do Cloudflare)
 *      npm run videos
 */
import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

let ffmpeg;
try {
  ({ default: ffmpeg } = await import("ffmpeg-static"));
} catch {
  console.error("ffmpeg não encontrado. Rode antes: npm i --no-save ffmpeg-static");
  process.exit(1);
}

const POSTER_AT = { rosana: 1, esmeralda: 14, silvana: 21 };
const LIMIT = 25 * 1024 * 1024;

const src = path.resolve("assets-src/videos");
const out = path.resolve("public/videos");
if (!existsSync(src)) process.exit(0);
await mkdir(out, { recursive: true });

const run = (args) => {
  const r = spawnSync(ffmpeg, ["-hide_banner", "-loglevel", "error", "-y", ...args], { stdio: "inherit" });
  if (r.status !== 0) throw new Error(`ffmpeg falhou: ${args.join(" ")}`);
};

for (const file of (await readdir(src)).filter((f) => /\.(mp4|mov|m4v)$/i.test(f))) {
  const name = path.parse(file).name.toLowerCase();
  const input = path.join(src, file);
  const video = path.join(out, `${name}.mp4`);
  const poster = path.join(out, `${name}.jpg`);

  const fresh = existsSync(video) && (await stat(video)).mtimeMs > (await stat(input)).mtimeMs;
  if (!fresh) run([
    "-i", input,
    "-vf", "scale=720:-2",
    "-c:v", "libx264", "-preset", "slow", "-profile:v", "high", "-pix_fmt", "yuv420p",
    "-crf", "26", "-maxrate", "1200k", "-bufsize", "2400k",
    "-c:a", "aac", "-b:a", "96k", "-ac", "2",
    "-movflags", "+faststart",
    video,
  ]);
  run(["-ss", String(POSTER_AT[name] ?? 1), "-i", input, "-frames:v", "1", "-vf", "scale=720:-2", "-q:v", "3", poster]);

  const size = (await stat(video)).size;
  console.log(`${name}: ${(size / 1024 / 1024).toFixed(1)} MB${size > LIMIT ? "  ⚠ acima de 25 MiB — reduza -crf/-maxrate" : ""}`);
}
