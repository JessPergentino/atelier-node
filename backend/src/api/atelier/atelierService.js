const Atelier = require('./atelier')

Atelier.methods(['get', 'post', 'put', 'delete'])
Atelier.updateOptions({new: true, runValidators: true})

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