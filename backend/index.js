import express from 'express';

const app = express();
const livros = [
    {
        id: 1,
        nome: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien',
        ano: 1954
    },
    {
        id: 2,
        nome: '1984',
        autor: 'George Orwell',
        ano: 1949
    },
    {
        id: 3,
        nome: 'O Hobbit',
        autor: 'J.R.R. Tolkien',
        ano: 1937
    }
]

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})