# Instituto Escola - Website

Este é um projeto Angular para um website institucional de escola, focado na apresentação visual da instituição. O projeto não inclui funcionalidades de login ou administração, sendo puramente um site de apresentação.

## 🏫 Sobre o Projeto

Um website moderno e responsivo para apresentar informações da escola, incluindo:
- Informações institucionais
- Cursos oferecidos
- Corpo docente
- Eventos e notícias
- Contato e localização
- Galeria de fotos

## 🚀 Tecnologias Utilizadas

- **Angular 18** - Framework principal
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **Angular Material** - Componentes UI
- **Angular Router** - Navegação

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Angular CLI

### Passos para execução

1. **Clone o repositório** (se aplicável)
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
ng serve
```

4. **Acesse o aplicativo**
Navegue para `http://localhost:4200/`. A aplicação será recarregada automaticamente quando você alterar os arquivos fonte.

## 🛠️ Scripts Disponíveis

- `ng serve` - Inicia o servidor de desenvolvimento
- `ng build` - Constrói o projeto para produção
- `ng test` - Executa os testes unitários
- `ng lint` - Executa o linter do código
- `ng generate component nome-do-componente` - Gera um novo componente

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/         # Páginas principais
│   ├── services/      # Serviços
│   └── shared/        # Módulos compartilhados
├── assets/            # Recursos estáticos
└── styles/            # Estilos globais
```

## 🎨 Componentes Principais

- **Header/Navigation** - Menu principal e navegação
- **Home** - Página inicial
- **About** - Sobre a escola
- **Courses** - Cursos oferecidos
- **Faculty** - Corpo docente
- **Events** - Eventos e notícias
- **Contact** - Informações de contato
- **Footer** - Rodapé

## 📱 Responsividade

O projeto foi desenvolvido com foco em design responsivo, garantindo uma boa experiência em:
- Desktop
- Tablet
- Mobile

## 🔧 Build para Produção

Execute `ng build` para construir o projeto. Os artefatos serão armazenados no diretório `dist/`.

## � Deploy no GitHub Pages

### Configuração Automática (GitHub Actions)

O projeto está configurado com GitHub Actions para deploy automático. Quando você fizer push para a branch `main`, o site será automaticamente construído e publicado no GitHub Pages.

### Deploy Manual

Para fazer deploy manualmente, execute:

```bash
# Instalar dependências
npm install --legacy-peer-deps

# Build para produção
npm run build:prod

# Deploy para GitHub Pages
npm run deploy
```

### Configuração Inicial do GitHub Pages

1. No seu repositório do GitHub, vá em **Settings**
2. Na seção **Pages**, selecione:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` (será criada automaticamente)
3. O site estará disponível em: `https://[seu-usuario].github.io/instituto/`

**Nota**: Certifique-se de alterar o `--base-href` no script `build:prod` do `package.json` para corresponder ao nome do seu repositório.

## �📄 Licença

Este projeto é destinado ao uso educacional e institucional.
