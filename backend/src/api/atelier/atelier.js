const restful = require('node-restful')
const mongoose = restful.mongoose

const santaSchema = new mongoose.Schema({
    name: {type: String, require: true},
    value: {type: Number, min: 0, require: true},
    qtd: {type: Number, min:0, require: true},
    description: {type: String, require: false}

})

const envioSchema = new mongoose.Schema({
    description: {type: String, require: true, enum: ['PAC','SEDEX','RETIRADA']}
})

const pagamentoSchema = new mongoose.Schema({
    description: {type: String, require: true, enum: ['CARTAO_A_VISTA', 'PARCELADO', 'DEPOSITO_TOTAL','DEPOSITO_50', 'ENTREGA']}
})

const enderecoSchema = new mongoose.Schema({
    numero: {type: Number, require:true, min:0},
    rua: {type: String, require: true},
    complemento: {type: String, require: false},
    cidade: {type: String, require: true},
    estado: {type: String, require: true},
    cep: {type: String, require: true},
    bairro: {type: String, require: true}
})

const clienteSchema = new mongoose.Schema({
    name: {type: String, require: true},
    endereco: {enderecoSchema}
})

const encomendaSchema = new mongoose.Schema({
    ordemServico: {type: String, require: true},
    santa: {santaSchema},
    pagamento: {pagamentoSchema},
    envio: {envioSchema},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('atelier', encomendaSchema)