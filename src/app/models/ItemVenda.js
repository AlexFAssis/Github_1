const mongoose = require('mongoose');

const ItemVenda = new mongoose.Schema({
    valor: {
        type: Number,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    produto: {
        type: mongoose.ObjectId,
        ref: 'Produto',
        required: true
    },
    venda: {
        type: mongoose.ObjectId,
        ref: 'Venda',
        required: true
    }
});

module.exports = mongoose.model('ItemVenda', ItemVenda);