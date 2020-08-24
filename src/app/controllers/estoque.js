const Receita = require('../models/Receita');
const Estoque = require('../models/Estoque');

class estoqueDiaController {

  async listar(req, res) {
    try {
      const estoque = await Estoque.find()
        .populate('receita');
      return res.render('estoque/listagem', { estoque, title: 'Estoque' })
    } catch (erro) {
      console.error(erro);
      res.sendStatus(500).end();
    }
  }

}

module.exports = new estoqueDiaController;