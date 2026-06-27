# Teste de Automação QA 

Este projeto contém a automação de testes solicitada no desafio técnico, abrangendo cenários de interface web (E2E) e validação de API.

## Tecnologias Utilizadas
- **Framework:** Cypress
- **Linguagem:** JavaScript
- **Metodologia:** BDD com Cucumber
- **Relatórios:** Mochawesome

## Estrutura do Projeto
- `cypress/e2e/`: Contém os arquivos de feature (BDD) e testes de API.
- `cypress/support/`: Comandos customizados para reutilização.
- `cypress/results/`: Local onde são gerados os relatórios de execução (Mochawesome).

## Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

## Instalação
1. Clone o repositório:
   `git clone https://github.com/fernandoAM27/cypress-cucumber.git`
2. Acesse a pasta do projeto e instale as dependências:
   `npm install`

## Execução dos Testes
- **Para abrir a interface do Cypress:**
  `npx cypress open`
- **Para rodar os testes em modo headless (gerar relatório):**
  `npx cypress run`

## Visualização dos Relatórios
Após a execução do comando `npx cypress run`, o relatório final será gerado em formato HTML.
- **Caminho:** `cypress/results/mochawesome.html`
- **Como visualizar:** Abra este arquivo em qualquer navegador (Chrome, Edge ou Firefox).

## Desafios Implementados
- **Web:** Fluxo de Login, busca de produtos, adição ao carrinho e validação de tela de pagamento.
- **API:** Validação de status code e conteúdo do campo "name" da API do Trello.
