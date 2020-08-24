const mongoose = require('mongoose');

const HistoricoReceita = new mongoose.Schema({
    dtCalculoPrecoMedio: {
        type: Date,
        required: true
    },
    valorMedioPorcao: {
        type: Number,
    },
    valorMedio: {
        type: Number,
    },
    receita: {
        type: mongoose.ObjectId,
        ref: 'Receita',
    },
    receitaNome: {
        type: 'String',
        default: ''
    },
});

module.exports = mongoose.model('HistoricoReceita', HistoricoReceita);