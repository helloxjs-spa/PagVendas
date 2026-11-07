import type { NextConfig } from "next";

/**
 * Exportação estática para Cloudflare Pages: `next build` gera a pasta `out/`,
 * servida diretamente pelo Pages (sem servidor, sem adaptador).
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    // O Pages não executa o otimizador do Next: as fotos já são servidas em WebP
    // otimizado (ver scripts/optimize-images.mjs).
    unoptimized: true,
  },
};

export default nextConfig;
