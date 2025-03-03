const { Router } = require('express')
const UsuarioController = require('../controllers/usuarioController')
const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)

router
    .post('/usuarios', UsuarioController.cadastrar)
    .get('/usuarios', UsuarioController.buscarTodos)
    .get('/usuarios/id/:id', UsuarioController.buscarPorId)
    .put('/usuarios/id/:id', UsuarioController.atualizar)
    .delete('usuarios/id/:id', UsuarioController.deletar)

module.exports = router