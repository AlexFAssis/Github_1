const mongoose = require('mongoose');

const Compra = new mongoose.Schema({
    data: {
        type: Date,
        required: true
    },
    local: {
        type: String,
        required: true
    },
    valorTotal: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Compra', Compra);