const express = require('express')

module.exports = function(server) {
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //Atelier Routes
    const atelierService = require('../api/atelier/atelierService')
    atelierService.register(router, '/ateliers')
}