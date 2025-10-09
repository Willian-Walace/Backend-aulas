
const mongoose = require('mongoose'); 


const orderSchema = new mongoose.Schema({
    saborDoSuco: { type: String, required: true },
    quantidade: { type: Number, required: true },
    status: { 
        type: String, 
        required: true, 
        enum: ['iniciado', 'em processamento', 'pronto'],
        default: 'iniciado'
    },
    dataPedido: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ordem', orderSchema);
