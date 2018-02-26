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

Atelier.route('subTotal', (req,res,next) => {
    Atelier.aggregate({
        $project: {subT: {$sum: "santa.value"}, subQtd: {$sum: "santa.qtd"}}
    }, {
        $project: {id: 0, subT:1, subQtd:1}
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {subT:0, subQtd:0})
        }
    })
})
module.exports = Atelier
