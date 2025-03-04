const PermissaoService = require("../services/permissaoService")

const permissaoService = new PermissaoService()

class PermissaoController {

    static async cadastrar(req, res) {
        const { nome, descricao } = req.body

        try {
            const permissao = await permissaoService.cadastrar({ nome, descricao })

            res.status(201).send(permissao)
        } catch (error) {
            res.status(400).send({ message: error.message})
        }
    }

    static async buscarTodas(req, res) {
        const permissoes = await permissaoService.buscarTodas()      
        res.status(200).json(permissoes)
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params
            const permissao = await permissaoService.buscarPorId(id)          
            res.status(200).json(permissao)  
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async deletar(req, res) {
        const { id } = req.params      
        try {
            await permissaoService.deletar(id)          
            res.status(200).send({ message: 'Permissão deletada com sucesso!' })          
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async atualizar(req, res) {
        const { id } = req.params
        const { nome, descricao } = req.body      
        try {
            const role = await permissaoService.atualizar({ id, nome, descricao })      
            res.status(200).json(role)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

}

module.exports = PermissaoController