const express = require ('express')

const router = express.Router()

const usuariosController = require('../controllers/usuariosController')
const eventosController = require('../controllers/eventosController')
const deportesController = require('../controllers/deportesController')
const equiposController = require('../controllers/equiposController')

module.exports = ()=>{
    router.get('/usuarios',usuariosController.list)
    router.get('/usuarios/:id',usuariosController.show)
    router.post('/usuarios',usuariosController.add)
    router.put('/usuarios/:id',usuariosController.update)
    router.delete('/usuarios/:id',usuariosController.delete)
    //eventos
    router.get('/eventos',eventosController.list)
    router.post('/eventos',eventosController.add)
    router.get('/eventos/:id',eventosController.show)
    router.put('/eventos/:id',eventosController.update)
    router.delete('/eventos/:id',eventosController.delete)
    //deportes 
    router.get('/deportes',deportesController.list)
    router.post('/deportes',deportesController.add) 
    router.get('/deportes/:id',deportesController.show)
    router.put('/deportes/:id',deportesController.update)
    router.delete('/deportes/:id',deportesController.delete)
    //equipos
    router.get('/equipos',equiposController.list)
    router.post('/equipos',equiposController.add) 
    router.get('/equipos/:id',equiposController.show)
    router.put('/equipos/:id',equiposController.update)
    router.delete('/equipos/:id',equiposController.delete)

    return router 
}    
 
