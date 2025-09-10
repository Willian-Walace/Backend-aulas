const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
const BASE_URL = 'https://rickandmortyapi.com/api/character';

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API Ricky Morty!');
});

// Rota: /personagens - lista todos os personagens (1ª página)
app.get('/personagens', async (req, res) => {
  try {
    const response = await axios.get(BASE_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar personagens.' });
  }
});

// Rota: /personagem/:id - mostra personagem pelo ID
app.get('/personagem/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ erro: `Erro ao buscar personagem com ID ${id}.` });
  }
});

// Rota: /multiplospersonagens?id=1,2,3 - lista múltiplos personagens
app.get('/multiplospersonagens', async (req, res) => {
  const ids = req.query.id;
  if (!ids) {
    return res.status(400).json({ erro: 'Você precisa passar os IDs como parâmetro na query: ?id=1,2,3' });
  }

  try {
    const response = await axios.get(`${BASE_URL}/${ids}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar múltiplos personagens.' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
