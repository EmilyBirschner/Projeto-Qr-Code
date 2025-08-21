# 🚀 Gerador de QR Code Dinâmico

![Screenshot do Gerador de QR Code com tema escuro](img/screenshot-do-projeto.png)

## 📜 Descrição

Este é um projeto de estudo focado na criação de uma ferramenta web interativa. 
A aplicação permite que qualquer pessoa gere um QR Code a partir de um link ou texto de forma rápida e intuitiva. 
O projeto foi construído passo a passo, começando com a funcionalidade básica e evoluindo com melhorias de design, feedback visual e usabilidade.

O principal objetivo foi praticar a manipulação do DOM com JavaScript, integrar bibliotecas externas e refinar o design de uma aplicação com base em um fluxo de uso realista.

## 🔗 Deploy

A aplicação está disponível para uso no seguinte link:

**[Acessar a demonstração ao vivo](https://emily.dev.br/qrcode/)**


## ✨ Funcionalidades

-   **Geração Instantânea:** Crie QR Codes a partir de qualquer texto ou URL.
-   **Downloads Múltiplos:** Faça o download do QR Code gerado nos formatos **JPG** e **PDF**.
-   **Interface Reativa:** Mensagens de erro dinâmicas e que desaparecem sozinhas, sem o uso de `alertas` que interrompem a navegação.
-   **Tema Escuro (Dark Mode):** Design moderno e confortável para os olhos, com um plano de fundo personalizado.
-   **Animações Suaves:** Transições em CSS que tornam a experiência de uso mais fluida e profissional.
-   **Reset Fácil:** Um botão de "refresh" permite limpar a interface e começar de novo com um único clique.
-   **Design Limpo:** A interface é minimalista e focada na funcionalidade principal.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e bibliotecas:

-   **HTML5:** Para a estrutura semântica da página.
-   **CSS3:** Para estilização, design responsivo (Flexbox), animações e tema escuro.
-   **JavaScript (ES6+):** Para toda a lógica, interatividade e manipulação do DOM.
-   **qrcode.js:** Biblioteca externa para a geração do QR Code.
-   **jsPDF:** Biblioteca externa para a criação de ficheiros PDF para download.

## 📚 O que foi praticado

Este projeto foi uma excelente oportunidade para praticar conceitos fundamentais do desenvolvimento front-end:

-   **Manipulação do DOM:** Selecionar e alterar elementos HTML de forma dinâmica.
-   **Gestão de Eventos:** Utilizar `addEventListener` para responder a cliques de botões.
-   **Uso de Bibliotecas Externas:** Integrar e utilizar funcionalidades de bibliotecas de terceiros via CDN.
-   **Boas Práticas de UX/UI:** Substituir alertas por feedback visual na página, criar animações que guiam o utilizador e pensar num layout intuitivo.
-   **CSS Moderno:** Uso de `position`, `flexbox`, `transitions` e um sistema de classes dinâmicas (`.visivel`) para controlar o estado da UI.
-   **Lógica Assíncrona Simples:** Uso do `setTimeout` para criar eventos temporizados.

## 🏃 Como Executar Localmente

Este projeto não necessita de nenhuma ferramenta de compilação ou servidor complexo. Para executá-lo localmente, basta seguir os passos:

1.  Clone este repositório para a sua máquina:
    ```bash
    git clone https://github.com/EmilyBirschner/Projeto-Qr-Code
    ```
2.  Navegue até a pasta do projeto.
3.  Abra o ficheiro `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

E está pronto! A aplicação funcionará completamente offline.
