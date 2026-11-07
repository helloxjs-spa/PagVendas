/**
 * Otimiza as fotos para a exportação estática (Cloudflare Pages não executa o
 * otimizador de imagens do Next).
 *
 * Origem:  assets-src/fotos/*.{png,jpg,jpeg}  (arquivos originais, fora do deploy)
 * Destino: public/images/fotos/*.webp          (versões leves servidas no site)
 *
 * Uso: npm run images
 */
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = path.resolve("assets-src/fotos");
const OUT = path.resolve("public/images/fotos");
const MAX_WIDTH = 1920;
const QUALITY = 78;

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g)$/i.test(f));

for (const file of files) {
  const name = file.replace(/\.(png|jpe?g)$/i, ".webp");
  const image = sharp(path.join(SRC, file));
  const { width = 0, height = 0 } = await image.metadata();
  const info = await image
    .resize({ width: Math.min(width, MAX_WIDTH), withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(path.join(OUT, name));
  console.log(`${file} (${width}×${height}) → ${name} ${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB`);
}
