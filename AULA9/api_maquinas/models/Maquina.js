const mongoose = require("mongoose");

const MaquinaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    tipo: { type: String, required: true },
    status: { type: String, require:true },
    ultima_manutencao: { type: Date },
    proxima_manutencao: { type: Date }
});
module.exports = mongoose.model("Maquina", MaquinaSchema);
