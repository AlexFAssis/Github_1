const mongoose = require('mongoose');

const ReceitaPorDia = new mongoose.Schema({
    data: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('ReceitaPorDia', ReceitaPorDia);