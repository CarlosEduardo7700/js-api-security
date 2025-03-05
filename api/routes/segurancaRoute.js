const { Router } = require('express')
const SegurancaController = require('../controllers/segurancaController')

const router = Router()

router
    .post('/seguranca/acl', SegurancaController.cadastrarAcl)
    .post('/seguranca/permissoes-das-roles', SegurancaController.cadastrarPermissoesDaRole)

module.exports = router