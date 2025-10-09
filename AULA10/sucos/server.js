const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

const juiceRoutes = require('./routes/sucos');
const orderRoutes = require('./routes/ordem');

app.use('/api/cadastro-suco', juiceRoutes);
app.use('/api/pedidos', orderRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});