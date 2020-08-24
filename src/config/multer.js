const path = require('path');
const crypto = require('crypto');
const multer = require('multer');

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, callback) => {
      //Gera parte do nome randomico
      crypto.randomBytes(16, (err, raw) => {
        if (err) {
          return callback(err);
        }

        //Concatena um numero ou um hexadecimal randomico com a extensão do arquivo
        callback(null, raw.toString('hex') + path.extname(file.originalname));
      })
    }
  })
}