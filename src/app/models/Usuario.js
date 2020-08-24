//Requerindo o mongoose do node_modules
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

const mongoosePaginate = require('mongoose-paginate');

const Usuario = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    login: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    senhaConfirmacao: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true,
        default: 'Usuário',
        enum: ['Administrador', 'Usuário']
    },
});

//Criptografia da senha
//Hooks, Pre - Vai ser executado antes do Save
Usuario.pre('save', async function (next) {
    //Se a senha não foi modificada Next()
    if (!this.isModified('senha')) {
        return next();
    }

    //Se alterou
    this.senha = await bcrypt.hash(this.senha, 8);
    this.senhaConfirmacao = await bcrypt.hash(this.senha, 8);
})

//metodos para cada instância
Usuario.methods = {
    //Compara senha para validação
    compareHash(password) {
        return bcrypt.compare(password, this.senha);
    }
}

//É da model e não da instância
// Usuario.statics = {
//     generateToken({ id }) {
//         //1º - Campos incluidos no token
//         //2º - Segredo do token
//         //3º - Tempo de expiração
//         //authConfig esta no arquivo config/auth
//         return jwt.sign({ id }, authConfig.secret, {
//             expiresIn: authConfig.ttl
//         })
//     }
// }

module.exports = mongoose.model('Usuario', Usuario);