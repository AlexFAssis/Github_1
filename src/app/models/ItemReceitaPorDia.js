const mongoose = require('mongoose');

const ItemReceitaPorDia = new mongoose.Schema({
    quantidade: {
        type: Number,
        required: true
    },
    receita: {
        type: mongoose.ObjectId,
        ref: 'Receita',
        required: true
    },
    sobra: {
        type: Number,
        default: 0
    },
    receitaPorDia: {
        type: mongoose.ObjectId,
        ref: 'ReceitaPorDia',
        required: true
    },
});

module.exports = mongoose.model('ItemReceitaPorDia', ItemReceitaPorDia);