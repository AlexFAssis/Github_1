const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Receita = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    modoPreparo: {
        type: String,
        required: true
    },
    qtdeRendimento: {
        type: Number,
        required: true
    },
    tempoPreparo: {
        type: String,
        required: true
    },
    obs: {
        type: String,
        default: ''
    },
    criadaEm: {
        type: Date,
        default: Date.now()
    },
    imgReceita: {
        type: String,
        default: ''
    },
    valorMedioPorcao: {
        type: Number,
        default: 0
    },
    valorMedio: {
        type: Number,
        default: 0
    },
    dtCalculoPrecoMedio: {
        type: Date,
    },
    categoriaReceita: {
        type: mongoose.ObjectId,
        ref: 'CategoriaReceita',
    }
});

Receita.plugin(mongoosePaginate)

module.exports = mongoose.model('Receita', Receita);