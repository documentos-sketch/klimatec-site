# KlimaTEC — Website

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Lucide · exportação estática (`out/`).

## Comandos
```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # gera o site estático em ./out (pronto para Vercel, Netlify, cPanel, etc.)
```

## Configuração (tudo centralizado)
- `src/config/site.ts` — contactos, WhatsApp, horário, área de atuação, morada, NIF, redes sociais.
  Campos a `null` ficam ocultos automaticamente (botão WhatsApp, telefone no cabeçalho, morada, Schema.org).
- `.env` → `NEXT_PUBLIC_SITE_URL=https://www.klimatec.pt` e `NEXT_PUBLIC_FORM_ENDPOINT=<url>`
  O endpoint recebe `multipart/form-data` (inclui fotografias). Pode ser Formspree, Make, n8n, Basin ou API própria.
  **Sem endpoint, os formulários mostram “O envio online ainda não está ativo” — nunca simulam sucesso.**
- `src/data/services.ts` — conteúdos das 6 páginas de serviço (equipamentos, intervenções, FAQ).
- `src/data/content.ts` — menu, diferenciais, processo, setores, contrato de manutenção, valores.
- `src/data/blog.ts` — artigos e categorias.
- `src/data/projects.ts` — projetos reais (vazio → a página mostra estado vazio).

## Estrutura de páginas
`/`, `/servicos`, `/servicos/{ar-condicionado,aquecimento,refrigeracao,ventilacao,instalacoes-eletricas,manutencao-assistencia}`,
`/empresas` (+ formulário empresarial), `/sobre-nos`, `/projetos`, `/blog`, `/blog/[artigo]`, `/orcamento`, `/contactos`,
`/politica-de-privacidade`, `/politica-de-cookies`, 404, `sitemap.xml`, `robots.txt`.

## Formulários
Validação nativa + regras próprias, campo isco anti-spam, upload de até 5 imagens (JPG/PNG/WEBP/HEIC, 5 MB),
estados de envio/erro, referência gerada (ex.: `KT-2610-4F7Q`) apenas após resposta positiva do servidor.
