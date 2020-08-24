const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TipoImposto = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('TipoImposto', TipoImposto);