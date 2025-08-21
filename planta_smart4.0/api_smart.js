// api-simples/serve.js

const express = require('express');

const app = express();

const port = 3000;

let dados = [];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Sistema SMART 4.0 funcionando!');
});


app.post('/cadastro', (req, res) => {
    const { nomeprod, quantidade, tipo  } = req.body;
    if (!nomeprod || !quantidade || !tipo === undefined || quantidade === null || quantidade === 0 || nomeprod.trim() === "") {
        res.status(400).json({ error: 'Todos os dados são obrigatórios.' });
    }
    const novo = {nomeprod, quantidade,tipo};
    dados.push(novo);
    res.status(201).json({ mensagem: 'Dado adicionado com sucesso!', data: novo });
});   


app.get('/exibir', (req, res) => {
    //res.json(dados);
    res.send(dados)
});


app.listen(port, () => {
  console.log(`Server rodando na porta: ${port}`);
});



