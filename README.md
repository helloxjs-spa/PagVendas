# APH 2027 — Página de vendas do Grupo EDASI

Landing page estática (Next.js 16 · App Router · TypeScript · Tailwind CSS 4), exportada como arquivos estáticos para o **Cloudflare Pages**. Sem backend, banco de dados ou rastreamento.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # gera a pasta out/ (site estático)
npm run preview    # serve a pasta out/ localmente
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Link de inscrição, WhatsApp, modo revisão | `src/content/site.ts` |
| Todos os textos da página | `src/content/course.ts` |
| Fotos, vídeos e depoimentos | `src/content/media.ts` (arquivos em `public/images/`) |
| Fotos originais (fora do deploy) | `assets-src/fotos/` → `npm run images` gera os WebP |
| Cores e tipografia | `src/app/globals.css` (bloco `@theme`) |
| Seções | `src/components/sections/*` |

### Fotografias que o layout espera (`src/content/media.ts`)

| Espaço | Formato | Onde aparece |
| --- | --- | --- |
| `heroPhoto` — FOTO 01 | horizontal, turma em aula prática | Fundo da capa (recebe camada azul) |
| `coursePhoto` — FOTO 02 | vertical ou quadrada, simulado em equipe | Ao lado do APH 360° |
| `closingPhoto` — FOTO 03 | horizontal, turma reunida ou formatura | Fundo da seção de investimento |
| `galleryPhotos` (6) | verticais | Carrossel "Galeria de vivências" |

As fotos atuais são ilustrativas (banco de imagens enviado pelo cliente — confirmar licença). Direção para as fotos reais: pessoas do EDASI, rostos visíveis, luz natural.

**Nova foto:** coloque o original em `assets-src/fotos/`, rode `npm run images` e aponte o `.webp` gerado em `src/content/media.ts`.

Sem foto, cada espaço mostra um fundo azul da marca (nunca imagem quebrada).

Convenção dos títulos em `course.ts`: `|` quebra a linha e `*texto*` vira a palavra destacada em azul.

## Modo revisão × versão pública

- **Revisão** (padrão): mostra a faixa "Página em revisão", os espaços identificados para fotos, vídeos e depoimentos. A página fica com `noindex`.
- **Pública**: defina `NEXT_PUBLIC_REVIEW_MODE=false` no deploy. Seções sem material (vídeos, galeria com menos de 3 fotos, depoimentos) deixam de aparecer; os espaços de foto sem material mostram o fundo azul da marca.

## Botões de inscrição e WhatsApp

- Inscrição → `inscriptionUrl` (HTTPS). Sem ele, usa o WhatsApp. Sem nenhum dos dois, o botão mostra o aviso "Portal de inscrição e WhatsApp oficiais serão ativados após configuração."
- O WhatsApp flutuante só aparece na versão pública quando `whatsappNumber` estiver preenchido (DDI + DDD + número, só dígitos).

## Deploy no Cloudflare Pages

O projeto usa `output: "export"`: o build gera a pasta `out/`, servida diretamente pelo Pages (sem servidor nem adaptador). Os arquivos `public/_headers` (cache e segurança) e `.node-version` (Node 22) já estão prontos.

### Opção A — Git (recomendada: cada push publica sozinho)

1. Envie o projeto para um repositório no GitHub ou GitLab.
2. No painel da Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** e escolha o repositório.
3. Configuração do build:

| Campo | Valor |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |

4. Em **Environment variables (Production)**:

| Variável | Valor |
| --- | --- |
| `NEXT_PUBLIC_REVIEW_MODE` | `false` |
| `NEXT_PUBLIC_SITE_URL` | domínio final, ex.: `https://aph.grupoedasi.com.br` |

   Nos deploys de prévia (branches), deixe `NEXT_PUBLIC_REVIEW_MODE` sem valor para ver a versão de revisão.

5. Domínio próprio: **Custom domains → Set up a custom domain**.

### Opção B — Upload direto pelo terminal

```bash
# Git Bash / macOS / Linux
NEXT_PUBLIC_REVIEW_MODE=false NEXT_PUBLIC_SITE_URL=https://seu-dominio npm run deploy
```

```powershell
# PowerShell (Windows)
$env:NEXT_PUBLIC_REVIEW_MODE="false"; $env:NEXT_PUBLIC_SITE_URL="https://seu-dominio"; npm run deploy
```

Usa o Wrangler (`npx wrangler pages deploy out --project-name=edasi-aph`); na primeira vez ele pede login na conta Cloudflare.

### Opção C — Arrastar e soltar

Rode o build com as variáveis acima e envie a pasta `out/` em **Workers & Pages → Create → Pages → Upload assets**.
