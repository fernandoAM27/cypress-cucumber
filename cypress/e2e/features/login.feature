# language: pt

Funcionalidade: login e compras no sistema

  Contexto:
    Dado que acesso a página "https://www.automationexercise.com/login"

  Cenário: Realizar login com sucesso
    Quando preencho os dados de login 
    Então devo estar logado com sucesso como "Fernando Arrais Machado"

  Cenário: Adicionar produto ao carrinho e validar
    Quando acesso a página de produtos
    E preencho o campo de busca "Summer White Top"
    E clico no botão de pesquisar 
    Então devo ver o produto "Summer White Top" nos resultados
    Quando adiciono o produto "Summer White Top" ao carrinho
    Então deve aparecer a mensagem de confirmação "Added!"
    E clico em continuar comprando
    Quando acesso a página de carrinho
    Entao o produto "Summer White Top" deve estar visível no carrinho

