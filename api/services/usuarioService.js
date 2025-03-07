const database = require('../models')
const { hash } = require('bcryptjs')
const { where } = require('sequelize')
const uuid = require('uuid')

class UsuarioService {

    async cadastrar(dto) {
        const usuario = await database.usuarios.findOne({
            where: {
                email: dto.email
            }
        })

        if (usuario) {
            throw new Error('Usuário já cadastrar!')
        }

        try {
            const senhaHash = await hash(dto.senha, 8)

            const novoUsuario = await database.usuarios.create({
                id: uuid.v4(),
                nome: dto.nome,
                email: dto.email,
                senha: senhaHash
            })

            return novoUsuario
        } catch (error) {
            throw new Error('Erro ao cadastrar o usuário!')
            
        }
    } 

    async buscarTodos() {
        const usuarios = await database.usuarios.findAll()
        return usuarios
    } 

    async buscarPorId(id) {
        const usuario = await database.usuarios.findOne({
            where: {
                id: id
            }
        })

        if (!usuario) {
            throw new Error('Usuário informado não cadastrado!')
        }

        return usuario
    }

    async atualizar(dto) {
        const usuario = await this.buscarPorId(dto.id)
        try {
            usuario.nome = dto.nome
            usuario.email = dto.email
            await usuario.save()
            return usuario
        } catch (error) {
            throw new Error('Error ao atualizar o usuário!')
        }
    }
    
    async deletar(id) {
        await this.buscarPorId(id)
        try {
            await database.usuarios.destroy({
                where: {
                    id: id
                }
            })
        } catch (error) {
            throw new Error('Erro ao tentar deletar o usuário!')
        }
    }



}

module.exports = UsuarioService