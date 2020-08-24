const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')
const { promisify } = require('util')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.redirect('/usuario/login')
    // return res.status(401).json({ error: 'Token não informado' })
  }

  //Formato original
  //Authorization: Bearer TOKEN

  //Captura somente a parte do TOKEN, dividindo a string pelo espaço
  const [, token] = authHeader.split(' ')

  //validando token
  try {
    /* 
     Não retorna uma promisse, então não tem como usar o await
     E ao invés de usar um função de callback o Node tem o promossify
     que faz o método 'virar' uma promisse, ai é possivel usar o await 
   */
    //Decoded = Id do usuário passado no model, metodo (generateToken)
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    //Como isso é um middleware a partir de agora todas as rotas que utilizarem esse middleware 
    //tem o ID do usário
    req.userId = decoded.id;

    return next();

  } catch (err) {
    return res.redirect('/usuario/login')
    // return res.status(401).json({ error: 'Token Inválido' })
  }
  // 
}