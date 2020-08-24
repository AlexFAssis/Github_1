const mongoose = require('mongoose');

const Venda = new mongoose.Schema({
    valorTotal: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    metodoPagamento: {
        type: String,
        enum: ['Dinheiro', 'Credito', 'Debito']
    },
    qtdeParcelas: {
        type: Number,
        default: 1
    },
    desconto: {
        type: Number,
        default: 0
    },
    usuario: {
        type: mongoose.ObjectId,
        ref: 'Usuario',
    }
});

module.exports = mongoose.model('Venda', Venda);