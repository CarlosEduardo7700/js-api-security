const { Router } = require('express')
const PermissaoController = require('../controllers/permissaoController')

const router = Router()

router
    .post('/permissao', PermissaoController.cadastrar)
    .get('/permissao', PermissaoController.buscarTodas)
    .get('/permissao/id/:id', PermissaoController.buscarPorId)
    .delete('/permissao/id/:id', PermissaoController.deletar)
    .put('/permissao/id/:id', PermissaoController.atualizar)

module.exports = router