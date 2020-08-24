const mongoose = require('mongoose');

const ItemReceita = new mongoose.Schema({
    qtdeInsumo: {
        type: Number,
        required: true
    },
    medida: {
        type: String,
        required: true,
        enum: ['L', 'ML', 'KG', 'G', 'MG', 'Colher Sopa', 'Colher Cha', 'Xicara', 'Unidade', 'Duzia', 'Copo']
    },
    insumo: {
        type: mongoose.ObjectId,
        ref: 'Insumo',
        required: true
    },
    receita: {
        type: mongoose.ObjectId,
        ref: 'Receita',
        // required: true
    },
});

module.exports = mongoose.model('ItemReceita', ItemReceita);