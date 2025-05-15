import e from 'express';
import express from 'express';
const app = express();
app.use(express.json()); // Middleware para parsear JSON


// Banco de dados em memória
const livros = [
    { id: 1, nome: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', ano: 1954 },
    { id: 2, nome: '1984', autor: 'George Orwell', ano: 1949 },
    { id: 3, nome: 'O Hobbit', autor: 'J.R.R. Tolkien', ano: 1937 }
];

// Rotas
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const livro = livros.find(l => l.id === id);

    if (!livro) {
        return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    res.status(200).json(livro);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro adicionado com sucesso');
})

// Inicia o servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

export default app; 