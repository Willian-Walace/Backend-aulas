// api-simples/serve.js

const express = require('express');

const app = express();

const port = 3000;

let dados = [];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Simples funcionando!');
});

app.get('/disciplina', (req, res) => {
    res.send('disciplina: Programação backend' )});


app.post('/data', (req, res) => {
    const { nome, idade } = req.body;
    if (!nome || idade === undefined || idade === null || idade === 0 || nome.trim() === "") {
        res.status(400).json({ error: 'Nome e idade são obrigatórios.' });
    }
    const novo = { nome, idade };
    dados.push(novo);
    res.status(201).json({ mensagem: 'Dado adicionado com sucesso!', data: novo });
});   


app.get('/data', (req, res) => {
    res.json(dados);
});


app.listen(port, () => {
  console.log(`Server rodando na porta: ${port}`);
});



