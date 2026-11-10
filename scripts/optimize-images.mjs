/**
 * Otimiza as fotos para a exportação estática (Cloudflare Pages não executa o
 * otimizador de imagens do Next).
 *
 * Origem:  assets-src/<pasta>/*.{png,jpg,jpeg}  (arquivos originais, fora do deploy)
 * Destino: public/images/<pasta>/*.webp          (versões leves servidas no site)
 *
 *   fotos  → fotos de layout (até 1920px de largura)
 *   equipe → retratos dos instrutores na esteira (até 640px; PNG transparente
 *            ganha fundo claro)
 *
 * Uso: npm run images
 */
import { readdir, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const QUALITY = 78;
const jobs = [
  { folder: "fotos", maxWidth: 1920 },
  { folder: "equipe", maxWidth: 640, background: "#f3f5f8" },
];

for (const { folder, maxWidth, background } of jobs) {
  const src = path.resolve("assets-src", folder);
  const out = path.resolve("public/images", folder);
  if (!existsSync(src)) continue;
  await mkdir(out, { recursive: true });
  const files = (await readdir(src)).filter((f) => /\.(png|jpe?g)$/i.test(f));

  for (const file of files) {
    const name = file.replace(/\.(png|jpe?g)$/i, ".webp");
    let image = sharp(path.join(src, file)).rotate();
    const { width = 0, height = 0 } = await image.metadata();
    if (background) image = image.flatten({ background });
    const info = await image
      .resize({ width: Math.min(width, maxWidth), withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(path.join(out, name));
    console.log(`${folder}/${file} (${width}×${height}) → ${name} ${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB`);
  }
}
