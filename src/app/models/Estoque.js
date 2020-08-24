const mongoose = require('mongoose');

const Estoque = new mongoose.Schema({
  quantidade: {
    type: Number,
    required: true
  },
  receita: {
    type: mongoose.ObjectId,
    ref: 'Receita',
    required: true
  },
});

module.exports = mongoose.model('Estoque', Estoque);