module.exports = (req, res, next) => {
  console.log('GUESSSTTTTT')
  console.log('sessaoooooo')
  console.log(req.session)
  console.log('usuariooooooo')
  console.log(req.session.usuario)
  if (req.session && !req.session.usuario) {
    //prossegue
    return next();
  }

  return res.redirect('../app/dashboard')
}