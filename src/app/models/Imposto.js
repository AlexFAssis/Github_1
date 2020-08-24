const mongoose = require('mongoose');

const Imposto = new mongoose.Schema({
    valor: {
        type: Number,
        required: true
    },
    tipoImposto: {
        type: mongoose.ObjectId,
        ref: 'TipoImposto',
    },
    dataPgto: {
        type: Date,
        required: true
    },
    qtde: {
        type: Number,
    },
    usuario: {
        type: mongoose.ObjectId,
        ref: 'Usuario',
        required: true
    },
    valorTotal: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Imposto', Imposto);