const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());    
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,  
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});