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

//rota PUT
app.put('/livros/:id', (req, res) => {
    const id = parseInt(req.params.id); // pega o id da URL e converte para número
    const index = livros.findIndex(l => l.id === id) // Procura o índice do livro no array pelo id

    if (index === -1) {
        return res.status(404).json({ erro: 'Livro não encontrado'})
    }

    livros[index] = {...livros[index], ...req.body}
    res.status(200).json(livros[index]);
})

app.delete('/livros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    livros.splice(livros.findIndex(l => l.id === id), 1); // Remove o livro do array
    res.status(200).json({ mensagem: 'Livro removido com sucesso' });
})

// Inicia o servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

export default app; 