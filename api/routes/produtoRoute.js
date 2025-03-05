const { Router } = require('express')
const ProdutoController = require('../controllers/produtoController')
const roles = require('../middleware/roles')
const permissoes = require('../middleware/permissoes')

const router = Router()

router
  .post('/produto', ProdutoController.cadastrarProduto)
  .get('/produto', roles(["Vendedor", "Gerente"]), ProdutoController.buscarTodosProdutos)
  .get('/produto/id/:id', permissoes(["Listar por Id"]), ProdutoController.buscarProdutoPorId)
  .delete('/produto/id/:id', roles(["Gerente", "Vendedor"]), permissoes(["excluir"]), ProdutoController.deletarProdutoPorId)
  .put('/produto/id/:id', ProdutoController.editarProduto)

module.exports = router