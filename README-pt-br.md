# Projeto One-Page Site com Acessibilidade

Este é um projeto de site de página única (One-Page Site) desenvolvido com Angular, Bootstrap e SCSS, com foco robusto na implementação de funcionalidades de acessibilidade.

## Visão Geral do Projeto

O objetivo principal deste projeto é demonstrar a construção de um site moderno e responsivo que incorpora recursos essenciais de acessibilidade para garantir que o conteúdo seja acessível ao maior número possível de usuários, incluindo aqueles com diferentes necessidades.

### Funcionalidades de Acessibilidade Implementadas

* **Alto Contraste:** Permite que o usuário alterne para um modo de alto contraste (preto/branco/amarelo vibrante) para melhorar a legibilidade para pessoas com deficiência visual. As cores foram escolhidas para maximizar o contraste conforme as diretrizes de acessibilidade.
* **Ajuste de Tamanho de Fonte:** Oferece botões para aumentar e diminuir o tamanho da fonte em múltiplos níveis, permitindo que o usuário personalize a legibilidade do texto. Isso é aplicado dinamicamente a todos os elementos de texto do site.
* **Navegação Fixa (Sticky Header):** O cabeçalho (que inclui a barra de acessibilidade e o menu de navegação) permanece fixo no topo da tela durante a rolagem, facilitando o acesso constante às opções e navegação.
* **Foco Visual Aprimorado:** Elementos interativos (botões, links, inputs) recebem um contorno visual claro ao serem focados (via teclado ou tabulação), melhorando a navegação para usuários que não utilizam o mouse.

## Tecnologias Utilizadas

* **Angular CLI:** Ferramenta para iniciar, desenvolver, compilar e manter aplicações Angular.
* **Angular:** Framework para construção de aplicações web de página única.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
* **SCSS (Sass):** Pré-processador CSS que adiciona funcionalidades como variáveis, aninhamento e laços para um CSS mais organizado e dinâmico.
* **Bootstrap 5:** Framework de CSS para desenvolvimento rápido e responsivo da interface do usuário.

## Como Iniciar o Projeto

Para rodar este projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o Node.js e o Angular CLI instalados globalmente em sua máquina.

* **Node.js:** Baixe e instale a versão LTS mais recente em [nodejs.org](https://nodejs.org/).
* **Angular CLI:** Após instalar o Node.js, instale o Angular CLI via npm:
    ```bash
    npm install -g @angular/cli
    ```

### Instalação

1.  **Clone o repositório** (ou descompacte o projeto) para o seu diretório local:
    ```bash
    git clone https://github.com/vinnyparker/One-Page-Accessibility
    # ou navegue até o diretório do projeto se já o tiver
    cd onepage-site
    ```
2.  **Instale as dependências** do projeto:
    ```bash
    npm install
    ```
    Isso instalará todas as bibliotecas necessárias, incluindo Angular e Bootstrap.

### Executando o Servidor de Desenvolvimento

1.  Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento do Angular:
    ```bash
    ng serve
    ```
2.  Abra seu navegador e navegue para `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você fizer alterações em qualquer arquivo-fonte.

## Estrutura de Pastas e Arquivos Chave

* `src/app/`: Contém os componentes principais da aplicação.
  * `app.component.ts`: Lógica principal do componente raiz, incluindo a manipulação das classes de acessibilidade (`Renderer2` e `document.body.classList`).
  * `app.html`: Estrutura HTML do site, incluindo o topbar de acessibilidade, o cabeçalho fixo e as seções da página.
  * `app.scss`: Estilos específicos do componente `AppComponent` (embora a maioria dos estilos de acessibilidade estejam em `styles.scss`).
* `src/styles.scss`: Arquivo global de estilos SCSS. **Contém as definições de cores para o modo de alto contraste e os múltiplos níveis de tamanho de fonte**, utilizando laços `@for` para gerar as classes dinamicamente.
* `src/index.html`: O arquivo HTML principal que carrega a aplicação Angular.
* `angular.json`: Arquivo de configuração do Angular CLI, onde o `styles.scss` e os arquivos do Bootstrap são configurados para serem carregados globalmente.

## Detalhes da Implementação de Acessibilidade

### Controle de Classes CSS

A manipulação das classes de acessibilidade (`high-contrast-mode`, `font-size-plus-X`, `font-size-minus-X`) é feita diretamente na tag `<body>` do documento. Isso é alcançado utilizando o `Renderer2` do Angular e o `document.body.classList` no `app.component.ts`.

### Armazenamento Persistente

As configurações de alto contraste e o nível de zoom da fonte são armazenadas no `localStorage` do navegador. Isso significa que as preferências do usuário são mantidas mesmo após o fechamento e reabertura do navegador.

### Estilos SCSS Dinâmicos

As classes de tamanho de fonte (`font-size-plus-1` até `font-size-plus-10` e `font-size-minus-1` até `font-size-minus-10`) são geradas programaticamente no `styles.scss` usando laços `@for` do SCSS. Isso permite uma escalabilidade fácil para adicionar mais ou menos níveis de ajuste de fonte sem repetir muito código CSS. O seletor universal `*` é usado dentro dessas classes para garantir que todos os elementos de texto sejam afetados, sobrescrevendo estilos padrão do navegador ou do Bootstrap.

### Z-Index para Conteúdo Fixo

Para garantir que o cabeçalho fixo (contendo o topbar e a navbar) permaneça visível sobre o restante do conteúdo ao rolar, foi utilizado `position: fixed` e um `z-index` elevado (`1030`) no elemento `.fixed-top-container`. Um `padding-top` correspondente é aplicado ao `body` para evitar que o conteúdo da página fique escondido atrás do cabeçalho fixo.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões para melhorar a acessibilidade, o código ou o design, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
---
