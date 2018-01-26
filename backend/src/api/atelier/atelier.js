const restful = require('node-restful')
const mongoose = restful.mongoose

const santaSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true},
    qtd: {type: Number, min:0, required: true},
    description: {type: String, required: false}

})

const envioSchema = new mongoose.Schema({
    description: {type: String, required: true, enum: ['PAC','SEDEX','RETIRADA']}
})

const pagamentoSchema = new mongoose.Schema({
    description: {type: String, required: true, enum: ['CARTAO_A_VISTA', 'PARCELADO', 'DEPOSITO_TOTAL','DEPOSITO_50', 'ENTREGA']}
})

const clienteSchema = new mongoose.Schema({
    name: {type: String, required: true},
    endereco: {type: String, required: true}
})

const encomendaSchema = new mongoose.Schema({
    ordemServico: {type: String, required: true},
    cliente: clienteSchema,
    santa: [santaSchema],
    pagamento: pagamentoSchema,
    envio: envioSchema,
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('atelier', encomendaSchema)