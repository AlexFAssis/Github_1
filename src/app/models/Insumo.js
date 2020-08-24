const mongoose = require('mongoose');

const Insumo = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    qtdeEstoque: {
        type: Number,
        required: true,
        default: 0
    },
    valorEstoque: {
        type: Number,
        required: true,
        default: 0
    },
    precoMedio: {
        type: Number,
        required: true,
        default: 0
    },
});

module.exports = mongoose.model('Insumo', Insumo);