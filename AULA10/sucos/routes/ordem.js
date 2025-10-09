
const express = require('express'); 
const Ordem = require('../models/Ordem');
const router = express.Router(); 


router.post('/', async (req, res) => {
    const { saborDoSuco, quantidade } = req.body; 
    try {
        const newOrder = new Order({ 
            saborDoSuco, 
            quantidade, 
            status: 'iniciado' 
        }); 
        await newOrder.save();
        res.status(201).json(newOrder); 
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o pedido', error });
    }
});

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find({ 
            status: { $ne: 'pronto' } 
        });
        res.status(200).json(orders); 
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os pedidos', error });
    }
});

router.get('/todos', async (req, res) => {
    try {
        const orders = await Order.find(); 
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os pedidos', error });
    }
});

router.put('/:id/status', async (req, res) => {
    const { status } = req.body;
    

    if (!['iniciado', 'em processamento', 'pronto'].includes(status)) {
        return res.status(400).json({ 
            message: 'Status inválido. Use: iniciado, em processamento ou pronto' 
        });
    }
    
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id, 
            { status }, 
            { new: true }
        );
        
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }
        
        res.status(200).json(updatedOrder); 
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o status do pedido', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Pedido deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar o pedido', error });
    }
});

module.exports = router; 