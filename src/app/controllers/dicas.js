class dicasController {
  async instrucoes(req, res) {
    return res.render('dicas/instrucoes', { title: 'Como usar o sistema' })
  }
}

module.exports = new dicasController();