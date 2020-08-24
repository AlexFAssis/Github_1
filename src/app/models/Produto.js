const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Produto = new mongoose.Schema({
    receita: {
        type: mongoose.ObjectId,
        ref: 'Receita',
        required: true
    },
    preco: {
        type: Number,
        required: true
    }
});

Produto.plugin(mongoosePaginate)
module.exports = mongoose.model('Produto', Produto);