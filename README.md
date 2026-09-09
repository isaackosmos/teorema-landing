# Teorema — Landing Pages

**🔗 Site no ar: https://teorema-landing.vercel.app**

Atalhos por produto:

| Produto | Link |
|---|---|
| V3ndor Praxis (ERP) | https://teorema-landing.vercel.app/vendor-praxis |

A raiz (`/`) hoje só redireciona para `/vendor-praxis`, que é o único
produto publicado.

## O que é este repositório

Um único projeto Next.js que hospeda **várias landing pages de produtos
independentes**, uma por rota. Cada produto tem o seu próprio conteúdo e a
sua própria rota; o que é compartilhado entre todos é a biblioteca de
componentes e os design tokens.

Adicionar um produto novo nunca deve exigir mexer nos arquivos de outro
produto. As regras completas (arquitetura, tokens, ordem das seções,
separação entre conteúdo e componente, e o passo a passo para criar uma
landing nova) estão em [`docs/PROJECT.md`](docs/PROJECT.md).

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:3000
```

Outros comandos:

```bash
npm run build      # build de produção
npm run start      # serve o build de produção
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

Não há suíte de testes neste repositório — `npm run typecheck && npm run lint`
é a verificação completa.

## Deploy

A Vercel está conectada ao repositório no GitHub: **todo push para `master`
publica em produção automaticamente**, sem nenhum comando local.

Painel do projeto:
https://vercel.com/isaackosmos-2764s-projects/teorema-landing

Se um push não aparecer no ar, confira o status do deploy no painel antes de
investigar o código — um deploy pode ser *bloqueado* (limite de uso do plano,
projeto pausado, proteção de deploy) sem que exista qualquer erro de build.

### Variável de ambiente

| Variável | Para que serve |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Domínio de produção usado para montar as URLs absolutas das imagens de Open Graph / Twitter. Sem ela, o `metadataBase` em `src/app/layout.tsx` cai num domínio **presumido**, que ainda não foi confirmado. |

## Documentação para agentes

[`CLAUDE.md`](CLAUDE.md) é o ponto de entrada e importa os outros dois:

- [`docs/PROJECT.md`](docs/PROJECT.md) — convenções do projeto, mantido por
  pessoas. É este que se edita.
- `AGENTS.md` — regras da versão do Next.js, **reescrito automaticamente**
  pelo `next dev`. Não editar à mão.
