const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/atelier')

mongoose.Error.messages.general.require = "O atributo '{PATH}' é obrigatorio"