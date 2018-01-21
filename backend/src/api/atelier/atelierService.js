const Atelier = require('./atelier')

Atelier.methods(['get', 'post', 'put', 'delete'])
Atelier.updateOptions({new: true, runValidators: true})

module.exports = Atelier