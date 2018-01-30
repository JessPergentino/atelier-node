const Atelier = require('./atelier')
const errorHandler = require('../common/errorHandler')

Atelier.methods(['get', 'post', 'put', 'delete'])
Atelier.updateOptions({new: true, runValidators: true})
Atelier.after('post', errorHandler).after('put', errorHandler)

Atelier.route('count', (req,res,next) => {
    Atelier.count((error,value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})
module.exports = Atelier