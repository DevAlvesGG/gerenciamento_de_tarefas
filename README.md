# API de Gerenciamento de Tarefas

API simples para aprendizado de criação de APIs usando TypeScript. Esta aplicação mantém as tarefas em memória e serve apenas como exemplo educacional — não use em produção.

**Pré-requisitos**
- Node.js (v16+ recomendado)
- npm ou yarn

**Instalação**
1. Instale dependências:

```bash
npm install
# ou
yarn
```

**Executando**

Com `npm`:

```bash
npm run dev    # se houver script de desenvolvimento (ex: nodemon/ts-node)
npm start      # para executar build/start se disponível
```

Por padrão o servidor roda na porta 3000 (confira em `src/server.ts`).

**Descrição rápida dos endpoints**

- `GET /tasks` — lista todas as tarefas
- `GET /tasks/:id` — obtém tarefa por `id`
- `POST /tasks` — cria uma nova tarefa
- `PUT /tasks/:id` — atualiza uma tarefa existente
- `DELETE /tasks/:id` — remove uma tarefa

**Formato da tarefa**

Campos esperados (ex.: `POST /tasks`):

- `title` (string) — título da tarefa
- `description` (string) — descrição
- `status` ("todo" | "doing" | "done") — status
- `priority` ("low" | "medium" | "high") — prioridade

Exemplo `POST /tasks` (curl):

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Estudar TypeScript","description":"Ler documentação","status":"todo","priority":"medium"}'
```

Exemplo `PUT /tasks/:id` (curl):

```bash
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"status":"doing"}'
```

Exemplo `DELETE /tasks/:id` (curl):

```bash
curl -X DELETE http://localhost:3000/tasks/1
```

**Observações**
- Os dados são armazenados em memória (array) — reiniciar o servidor limpa as tarefas.
- Projeto destinado apenas para aprendizado de criação de API com TypeScript.
- Para produção, adicione persistência (banco de dados), validação, autenticação e tratamento de erros apropriado.

----

Se quiser, eu posso: 1) gerar exemplos de respostas JSON para cada endpoint, 2) adicionar scripts `npm` úteis no `package.json`, ou 3) rodar a aplicação aqui para testar. Qual prefere?
