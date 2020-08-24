module.exports = (req, res, next) => {
  console.log('AUTHHHHHH')
  console.log('sessaoooooo')
  console.log(req.session)
  console.log('usuariooooooo')
  console.log(req.session.usuario)
  if (req.session && req.session.usuario) {
    /*
      res.locals.user = Faz com que todas as páginas do nunjucks
      possam acessar as propriedades da variavel user
    */

    //usado em todos arquivos .njk
    res.locals.usuario = req.session.usuario;

    //prossegue
    return next();
  }

  return res.redirect('/usuario/login')
}