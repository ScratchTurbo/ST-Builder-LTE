const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Diretório onde estão os arquivos a serem servidos
const publicPath = path.join(__dirname, 'public');

// Middleware para servir arquivos estáticos
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

