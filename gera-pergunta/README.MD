# Gera Pergunta

Aplicação de perguntas e respostas semelhante ao yahoo respostas.

## Funcionalidades

Cadastrar Perguntas
Cadastrar Respostas

## Parâmetros

| Parâmetro    | Descrição                                            | Valor padrão |
| ------------ | ---------------------------------------------------- | ------------ |
| PORT         | porta de execução da aplicação                       | 3000         |
| DB_NAME      | Nome do banco de dados                               | gerapergunta |
| DB_USER      | Usuário do banco de dados                            | gerapergunta |
| DB_PASS      | Senha de acesso ao banco                             | spinoza      |
| DB_HOST      | host do banco                                        | localhost    |
| DB_DIALECT   | Dialeto do banco                                     | mysql        |
| DB_IN_MEMORY | Indica se aplicação irá rodar com o banco em memória | false        |
|              |                                                      |              |

## Executando o projeto no terminal

Para execução do projeto local é necessário criar um arquivo `.env` com os parâmetros da tabela acima.

```bash
# no diretório do projeto
npm install
npm start
```

## Tecnologias

- Nodejs
- EJS
- Express
- Sequelize
- MySql
