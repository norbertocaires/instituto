# Instituto Escola - Website

Projeto Angular para o website institucional do **Instituto Educacional Conviver**. Não inclui login ou área administrativa — é um site de apresentação.

## 🏫 Sobre o Projeto

O projeto está atualmente reduzido a uma base mínima: header, seção inicial (hero) e rodapé, todos exibindo apenas o nome da escola. Todo o conteúdo variável (cursos, eventos, notícias, contato, sobre) foi removido de propósito e pode ser reconstruído a partir daqui.

## 🚀 Tecnologias Utilizadas

- **Angular 18** - Framework principal (standalone components)
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **Angular Router** - Instalado e pronto, mas sem rotas definidas (`app.routes.ts` está vazio)

> `@angular/material` e `@angular/cdk` estão nas dependências mas não são usados em nenhum componente no momento.

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm

### Passos para execução

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd instituto
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm start
```
> O Angular CLI (`ng`) só está instalado localmente no projeto. Rodar `ng serve` direto no terminal falha com "comando não reconhecido" a menos que você tenha o `@angular/cli` instalado globalmente — use `npm start` (ou `npx ng serve`).

4. **Acesse o aplicativo**
Navegue para `http://localhost:4200/`. A aplicação recarrega automaticamente quando você altera os arquivos fonte.

## 🛠️ Scripts Disponíveis

| Script | Comando | O que faz |
|---|---|---|
| `npm start` | `ng serve` | Sobe o servidor de desenvolvimento |
| `npm run build` | `ng build` | Build de desenvolvimento |
| `npm run build:prod` | `ng build --configuration production --base-href /` | Build de produção |
| `npm run watch` | `ng build --watch --configuration development` | Build em modo watch |
| `npm test` | `ng test` | Executa os testes unitários (Karma/Jasmine) |
| `npm run deploy` | `gh-pages -d dist/instituto-escola/browser -c institutoconviver.com.br --nojekyll` | Deploy manual para o GitHub Pages |

Para gerar um novo componente: `npx ng generate component components/nome-do-componente`.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/     # header, hero, footer
│   ├── models/         # Interfaces (hoje só SchoolInfo)
│   ├── services/       # SchoolDataService (dados da escola)
│   ├── app.component.*
│   ├── app.config.ts
│   └── app.routes.ts   # vazio, pronto para páginas futuras
├── index.html
└── styles.scss
```

## 🎨 Componentes Principais

- **Header** - Marca/logo com o nome da escola
- **Hero** - Seção inicial de boas-vindas
- **Footer** - Rodapé com nome da escola e copyright

Novas seções (sobre, cursos, eventos, notícias, contato etc.) podem ser adicionadas como novos componentes standalone em `src/app/components/`, consumindo dados do `SchoolDataService`.

## 📱 Responsividade

O projeto foi desenvolvido com foco em design responsivo, garantindo uma boa experiência em desktop, tablet e mobile.

## 🔧 Build para Produção

Execute `npm run build:prod` para construir o projeto. Os artefatos são gerados em `dist/instituto-escola/`.

## 🚀 Deploy no GitHub Pages

Veja o [DEPLOY.md](DEPLOY.md) para o guia completo. Resumo:

- **Automático**: push na branch `master` dispara o workflow em [.github/workflows/deploy.yml](.github/workflows/deploy.yml), que builda e publica via GitHub Actions (Pages configurado como origem "GitHub Actions", não uma branch `gh-pages`).
- **Manual**: `npm run deploy` publica `dist/instituto-escola/browser` numa branch `gh-pages` com domínio customizado `institutoconviver.com.br`.

## 📄 Licença

Este projeto é destinado ao uso educacional e institucional.
