# Portfólio em Nuxt 3 + Content (MDX)

Projeto de portfólio com Nuxt 3 + TypeScript + `@nuxt/content`, com:

- Home (`/`) responsiva (mobile + desktop)
- Página de projeto (`/projects/[slug]`)
- Conteúdo dos projetos via MDX em `content/projects/*.mdx`
- SEO e A11y pragmáticos

## Como rodar

1. Instale dependências:

```bash
npm install
```

2. Rode em desenvolvimento:

```bash
npm run dev
```

3. Valide tipos e lint:

```bash
npm run typecheck
npm run lint
npm run format
```

## Estrutura principal

```txt
pages/
  index.vue
  projects/[slug].vue
components/
  BrandMark.vue
  ProjectCard.vue
  ProjectGallery.vue
  ProjectHero.vue
  TagList.vue
  Callout.vue
  Metrics.vue
content/
  projects/
    exemplo-projeto.mdx
    exemplo-projeto-2.mdx
    exemplo-projeto-3.mdx
    exemplo-projeto-4.mdx
public/
  images/
styles/
  tokens.css
  globals.css
types/
  project.ts
server/routes/
  sitemap.xml.ts
```

## Criar um novo projeto via MDX

1. Crie um arquivo em `content/projects/<slug>.mdx`
2. Use o frontmatter obrigatório:

```md
---
title: Nome do Projeto
slug: nome-do-projeto
year: 2026
role: Product Designer
summary: Resumo curto do case
cover: /images/nome-da-capa.svg
tags:
  - UX
  - UI
  - Research
---
```

3. Escreva o conteúdo do case abaixo do frontmatter.

## Convenções de frontmatter

Campos obrigatórios:

- `title`
- `slug`
- `year`
- `role`
- `summary`
- `cover`
- `tags` (array)

Campo opcional:

- `ogImage`

## Componentes custom dentro do MDX

Você pode usar componentes Vue diretamente no conteúdo MDX:

```mdx
<Callout title="Decisão">
  Conteúdo do destaque.
</Callout>

<Metrics :items='[{ "label": "Conversão", "value": "+18%" }]' />

<ProjectGallery
  :images='[
    { "src": "/images/projeto-1.svg", "alt": "Descrição útil da imagem", "caption": "Legenda" }
  ]'
/>
```

## Como adicionar imagens

1. Salve as imagens em `public/images`
2. Referencie no frontmatter e no MDX com caminho absoluto iniciado por `/images/...`
3. Sempre preencha `alt` descritivo nas imagens

## Consistência visual (tokens)

Todos os espaçamentos, tamanhos e cores base estão em `styles/tokens.css`.

- Espaçamento: `--space-*`
- Tipografia: `--font-size-*`, `--line-height-*`
- Cores: `--color-*`

Para manter consistência:

1. Reutilize os tokens existentes antes de criar novos.
2. Evite valores mágicos fora dos tokens, exceto em casos de ajuste fino.
3. Preserve o grid de duas colunas desktop (`330px + conteúdo`) nas seções principais.

## SEO e sitemap

- SEO por página com `useSeoMeta()`
- Canonical configurado com `useHead()`
- Sitemap pronto em `/sitemap.xml` via `server/routes/sitemap.xml.ts`

Defina `NUXT_PUBLIC_SITE_URL` no ambiente para canonical/sitemap corretos em produção.
