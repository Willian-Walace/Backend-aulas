const express = require('express');
const app = express();
app.use(express.json());

let clientes = [];
let jogos = [];

app.get('/', (req, res) => {
  res.send('Bem vindo à API games');
});

app.post('/cadastrar_clientes', (req, res) => {
  const { nome, email } = req.body;
  const cliente = {
    id: clientes.length + 1,
    nome,
    email
  };
  clientes.push(cliente);
  res.json({ mensagem: 'Cliente cadastrado com sucesso!' });
});

app.post('/cadastrar_jogos', (req, res) => {
  const { titulo, plataforma } = req.body;

  if (plataforma !== 'PS5' && plataforma !== 'Nintendo Switch') {
    return res.status(400).json({ erro: 'Plataforma inválida. Use PS5 ou Nintendo Switch.' });
  }
  const jogo = {
    id: jogos.length + 1,
    titulo,
    plataforma
  };
  jogos.push(jogo);
  res.json({ mensagem: 'Jogo cadastrado com sucesso!' });
});

app.get('/exibe_clientes', (req, res) => {
  res.json(clientes);
});

app.get('/exibe_jogos', (req, res) => {
  res.json(jogos);
});

app.delete('/deletar_cliente/:id', (req, res) => {
  const id = parseInt(req.params.id);
  clientes = clientes.filter(cliente => cliente.id !== id);
  res.json({ mensagem: `Cliente com ID ${id} deletado.` });
});

app.delete('/deletar_jogo/:id', (req, res) => {
  const id = parseInt(req.params.id);
  jogos = jogos.filter(jogo => jogo.id !== id);
  res.json({ mensagem: `Jogo com ID ${id} deletado.` });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});