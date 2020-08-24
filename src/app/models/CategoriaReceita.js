const mongoose = require('mongoose');

const CategoriaReceita = new mongoose.Schema({
    categoria: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('CategoriaReceita', CategoriaReceita);