# Guia de Deploy - GitHub Pages

## ✅ Configuração Atual

O projeto tem **dois caminhos de deploy** para o GitHub Pages, independentes entre si:

1. **Automático via GitHub Actions** ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) — dispara a cada push na branch `master`, builda o projeto e publica usando as actions oficiais do GitHub Pages (`configure-pages` + `upload-pages-artifact` + `deploy-pages`). Não cria nem usa uma branch `gh-pages`.
2. **Manual via `gh-pages`** (script `npm run deploy`) — builda localmente e publica o conteúdo de `dist/instituto-escola/browser` numa branch `gh-pages`, com CNAME para o domínio customizado `institutoconviver.com.br`.

Use o caminho automático no dia a dia; o manual serve como alternativa/fallback.

### 📦 Dependências e Arquivos de Configuração
- ✅ `gh-pages` - usado só no deploy manual
- ✅ `.github/workflows/deploy.yml` - GitHub Actions para deploy automático
- ✅ `src/.nojekyll` - Previne processamento Jekyll
- ✅ `src/404.html` - Suporte a roteamento SPA
- ✅ Scripts no `package.json` (`build:prod`, `deploy`, `predeploy`)
- ✅ `angular.json` com `outputPath: dist/instituto-escola`

### 🚀 Como Fazer Deploy

#### Opção 1: Deploy Automático (Recomendado)
1. Faça push do código para a branch `master`
2. O GitHub Actions vai automaticamente:
   - Instalar dependências (`npm install --legacy-peer-deps`)
   - Rodar `npm run build:prod`
   - Publicar o conteúdo de `dist/instituto-escola/browser` no GitHub Pages

#### Opção 2: Deploy Manual
```bash
npm run deploy
```
Isso builda (`predeploy` roda `build:prod` automaticamente) e publica na branch `gh-pages` com o domínio customizado `institutoconviver.com.br` via CNAME.

### ⚙️ Configuração do GitHub Repository

Para o deploy **automático** (Opção 1):
1. **Settings** → **Pages**
2. **Source**: **GitHub Actions** (não "Deploy from a branch") — é isso que o workflow atual espera.

Para o deploy **manual** (Opção 2), a branch `gh-pages` é criada/atualizada pelo próprio comando; configure **Source: Deploy from a branch** → `gh-pages` apenas se for usar esse caminho.

### 🌐 URL do Site

- Deploy manual (`npm run deploy`): publica com CNAME para `institutoconviver.com.br` (domínio customizado).
- Deploy automático (GitHub Actions): publica na URL padrão do GitHub Pages do repositório, a menos que um domínio customizado também esteja configurado em **Settings → Pages → Custom domain**.

O `build:prod` usa `--base-href /`, ou seja, ele assume que o site fica na raiz de um domínio (custom domain), não num subcaminho como `usuario.github.io/instituto/`. Se for publicar sem domínio customizado, ajuste o `--base-href` para `/instituto/` (ou o nome do repositório) antes de buildar.

### 🔍 Verificação

Após o deploy, verifique:
- [ ] Site carrega corretamente
- [ ] Recursos (CSS, JS, favicon) carregam sem erro 404
- [ ] Design responsivo funciona

### 🛠️ Comandos Úteis

```bash
# Instalar dependências
npm install

# Build local para testar
npm run build:prod

# Servir o build localmente
npx http-server dist/instituto-escola/browser

# Deploy manual
npm run deploy
```

> `ng` não está instalado globalmente neste ambiente — use sempre os scripts `npm run ...`/`npm start`, ou `npx ng ...`.

### 📱 Mobile e SEO

O projeto inclui:
- ✅ Meta tags para SEO em `src/index.html`
- ✅ Viewport responsivo
- ✅ Lang português brasileiro

---

**Status**: ✅ Pronto para deploy — mas atualmente o site só mostra o nome da escola (conteúdo foi zerado, ver README).
