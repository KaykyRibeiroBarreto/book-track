const express = require('express');
const app = express();
const PORT = 3001;

// Middleware para entender JSON no corpo das requisições
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('API do Book Track está funcionando!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
