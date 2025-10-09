
const express = require('express'); 
const Sucos = require('../models/Sucos'); 
const router = express.Router(); 

router.post('/', async (req, res) => {
    const { sabor, quantidade, quantidadeEmEstoque } = req.body; 
    try {
        const newJuice = new Juice({ sabor, quantidade, quantidadeEmEstoque });
        await newJuice.save();
        res.status(201).json(newJuice); 
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar o suco', error });
    }
});

router.get('/', async (req, res) => {
    try {
        const juices = await Juice.find();
        res.status(200).json(juices); 
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os sucos', error }); 
    }
});


router.put('/:id', async (req, res) => {
    const { sabor, quantidade, quantidadeEmEstoque } = req.body; 
    try {
        const updatedJuice = await Juice.findByIdAndUpdate(
            req.params.id, 
            { sabor, quantidade, quantidadeEmEstoque }, 
            { new: true }
        ); 
        res.status(200).json(updatedJuice); 
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o suco', error }); 
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Juice.findByIdAndDelete(req.params.id); 
        res.status(200).json({ message: 'Suco deletado com sucesso' }); 
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar o suco', error }); 
    }
});

module.exports = router; 
