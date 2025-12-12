📌 O que é req.body?

Quando você faz uma requisição HTTP (com POST, PUT, PATCH), normalmente precisa enviar dados para o servidor.
Esses dados não vão na URL nem nos parâmetros (req.params), mas sim dentro do corpo da requisição — em inglês, request body → req.body.

🔎 Exemplo simples
1. Fazendo uma requisição POST /livros

No frontend ou no Postman, você envia:

{
  "nome": "O Senhor dos Anéis",
  "autor": "J.R.R. Tolkien",
  "ano": 1954,
  "totalPaginas": 1178,
  "paginasLidas": 0
}


👉 Esse bloco JSON é o corpo da requisição (req.body).

2. No servidor Express
app.post('/livros', (req, res) => {
    console.log(req.body); 
    res.send('Livro recebido');
});


Se você enviar o JSON acima, o console.log(req.body) mostra:

{
  nome: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  ano: 1954,
  totalPaginas: 1178,
  paginasLidas: 0
}

⚙️ Como o Express entende o body?

Você usou isso no seu código:

app.use(express.json());


Esse middleware ensina o Express a interpretar o corpo como JSON.
Sem ele, o req.body viria undefined.

🔀 Diferença para outras partes da requisição

req.params → pega parâmetros da URL
Ex: /livros/:id → req.params.id

req.query → pega parâmetros da query string
Ex: /livros?autor=Tolkien → req.query.autor

req.body → pega o corpo enviado (JSON, formulário etc.)

🧠 Analogia

URL (params/query) = o endereço de onde você vai buscar algo.

req.body = a caixa com informações que você entrega ao servidor.

👉 Exemplo:
"Vou na pizzaria (rota /pedidos) pedir uma pizza (req.body),
com borda recheada (req.body.opcoes),
para a mesa 5 (req.params.id)."