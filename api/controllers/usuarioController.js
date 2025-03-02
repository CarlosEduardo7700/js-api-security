const UsuarioService = require('../services/usuarioService')

const usuarioService = new UsuarioService()

class UsuarioController {

    static async cadastrar(req, res) {
        const { nome, email, senha } = req.body

        try {
            const usuario = await usuarioService.cadastrar({ nome, email, senha })

            res.status(201).send(usuario)
        } catch (error) {
            res.status(400).send({ message: error.message})
        }
    }

    static async buscarTodos(req, res) {
        const usuarios = await usuarioService.buscarTodos()

        res.status(200).json(usuarios)
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params
            const usuario = await usuarioService.buscarPorId(id)
            res.status(200).json(usuario)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async atualizar(req, res) {
        const { id } = req.params
        const { nome, email } = req.body

        try {
            const usuario = await usuarioService.atualizar({id, nome, email})
            res.status(200).json(usuario)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async deletar(req, res) {
        const { id } = req.params

        try {
            await usuarioService.deletar(id)
            res.status(200).send({ message: 'Usuário deletado com sucesso!' })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

}

module.exports = UsuarioController