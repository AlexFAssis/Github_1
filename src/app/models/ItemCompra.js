const mongoose = require('mongoose');

const ItemCompra = new mongoose.Schema({
    quantidade: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    unidadeMedida: {
        type: String,
        required: true,
        enum: ['Litro(s)', 'ML', 'KG', 'Grama(s)', 'MG', 'Unidade(s)', 'Dúzia']
    },
    marca: {
        type: String,
        // required: true
    },
    compra: {
        type: mongoose.ObjectId,
        ref: 'Compra',
        required: true
    },
    insumo: {
        type: mongoose.ObjectId,
        ref: 'Insumo',
        required: true
    },
});

module.exports = mongoose.model('ItemCompra', ItemCompra);