# 🧠 Aprendizados com o Backend do BookTrack

## Configuração do ambiente
- npm init -y # Cria o package.json
-npm install express
- npm install cors
- npm install dotenv
- npm install mongoose
- npm install nodemon --save-dev # Para desenvolvimento


## Estrutura inicial do projeto
- Usei Express para criar o servidor.
- A instância do Express é chamada de app.
- A estrutura inicial do projeto é a seguinte:

```js
 import express from 'express';
const app = express();
app.use(express.json()); // Middleware para parsear JSON
```

- Logo após eu crio um banco de dados com um array de objetos, onde cada objeto representa um livro.
```js
const livros = [
    { id: 1, nome: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', ano: 1954 },
    { id: 2, nome: '1984', autor: 'George Orwell', ano: 1949 },
    { id: 3, nome: 'O Hobbit', autor: 'J.R.R. Tolkien', ano: 1937 }
];
```

- Depois eu crio uma rota para listar todos os livros.
```js
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});
```

- E uma rota para buscar um livro pelo id.
```js
app.get('/livros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const livro = livros.find(l => l.id === id);

    if (!livro) {
        return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    res.status(200).json(livro);
});
```
