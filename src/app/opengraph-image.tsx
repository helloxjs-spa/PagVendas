import { ImageResponse } from "next/og";
import { commercial } from "@/content/course";

export const alt =
  "APH 2027 | Grupo EDASI — Na emergência, não basta conhecer a técnica. É preciso saber aplicá-la.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Gerada uma única vez no build (exportação estática para Cloudflare Pages).
export const dynamic = "force-static";

/** Imagem de compartilhamento (WhatsApp, Instagram, redes) — só tipografia e cores da marca. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#081B34",
          color: "#fff",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: "#F5C451" }}>
            CURSO DE ATENDIMENTO PRÉ-HOSPITALAR
          </div>
          <div style={{ display: "flex", background: "#F5C451", color: "#081B34", padding: "10px 18px", fontSize: 30, fontWeight: 800 }}>
            APH 2027
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 64, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1.5 }}>
          <span>Na emergência, não basta conhecer a técnica.</span>
          <span style={{ color: "#F5C451" }}>É preciso saber aplicá-la.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "rgba(255,255,255,.75)", borderTop: "1px solid rgba(255,255,255,.2)", paddingTop: 24 }}>
          <span>Grupo EDASI · São Bernardo do Campo · SP</span>
          <span>
            {commercial.boleto.value} até {commercial.deadline}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
