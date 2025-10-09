
const mongoose = require('mongoose'); 

const juiceSchema = new mongoose.Schema({
    sabor: { type: String, required: true },
    quantidade: { type: Number, required: true },
    quantidadeEmEstoque: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('Sucos', juiceSchema);
