# Guia de Deploy - GitHub Pages

## ✅ Configuração Completa

O projeto está completamente configurado para deploy no GitHub Pages com:

### 📦 Dependências Instaladas
- ✅ `gh-pages` - Para deploy manual
- ✅ Scripts npm configurados

### 🔧 Arquivos de Configuração
- ✅ `.github/workflows/deploy.yml` - GitHub Actions para deploy automático
- ✅ `src/.nojekyll` - Previne processamento Jekyll
- ✅ `src/404.html` - Suporte a roteamento SPA
- ✅ Scripts modificados no `package.json`
- ✅ `angular.json` atualizado com assets corretos

### 🚀 Como Fazer Deploy

#### Opção 1: Deploy Automático (Recomendado)
1. Faça push do código para o GitHub
2. O GitHub Actions irá automaticamente:
   - Instalar dependências
   - Fazer build do projeto
   - Publicar no GitHub Pages

#### Opção 2: Deploy Manual
```bash
# Execute o deploy manual
npm run deploy
```

### ⚙️ Configuração do GitHub Repository

1. **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages` (será criada automaticamente)

### 🌐 URL do Site
Após o deploy, seu site estará disponível em:
`https://[seu-usuario].github.io/instituto/`

### 📝 Personalizações Necessárias

**IMPORTANTE**: Antes de fazer o deploy, altere no `package.json`:
```json
"build:prod": "ng build --configuration production --base-href /[NOME-DO-SEU-REPOSITORIO]/"
```

Substitua `[NOME-DO-SEU-REPOSITORIO]` pelo nome real do seu repositório no GitHub.

### 🔍 Verificação

Após o deploy, verifique:
- [ ] Site carrega corretamente
- [ ] Navegação entre páginas funciona
- [ ] Recursos (CSS, JS, imagens) carregam
- [ ] Design responsivo funciona

### 🛠️ Comandos Úteis

```bash
# Build local para testar
npm run build:prod

# Servir localmente (depois do build)
npx http-server dist/instituto-escola/browser

# Deploy manual
npm run deploy

# Verificar status do build
npm run build
```

### 📱 Mobile e SEO

O projeto inclui:
- ✅ Meta tags para SEO
- ✅ Viewport responsivo
- ✅ Título e descrição otimizados
- ✅ Lang português brasileiro

---

**Status**: ✅ Pronto para deploy!
