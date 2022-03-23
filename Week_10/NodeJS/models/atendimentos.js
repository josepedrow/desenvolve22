//importando conexao
const moment = require("moment")
const { reset } = require("nodemon")
const conexao = require('../infraestrutura/conexao')

//cria a classe atendimento
class Atendimento {

    //cria o método atendimento 
    //fará a inserção na tabela Atendimentos do DB

    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS') //formatando data usando moment

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao) //validação data agendamento >= atual
        const clienteEhValido = atendimento.cliente.length >= 5 //validação nome do cliente

        const validacoes = [{
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },

            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        } else {

            const atendimentoDatado = {...atendimento, dataCriacao, data }
            const sql = "INSERT INTO Atendimentos SET ?"

            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(atendimento)
                }
            })

        }

    }

    lista(res) {
        const sql = "SELECT * FROM Atendimentos"

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)

            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(atendimento)
            }
        })
    }

    altera(id, valores, res) {

        if (valores.data) {

            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS') //formatando data usando moment
        }

        const sql = "UPDATE Atendimentos SET ? WHERE id =?"

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id })
            }
        })

    }

    deleta(id, res) {

        const sql = "DELETE FROM Atendimentos WHERE id=?"

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ id })
            }
        })

    }
}

//exportar
module.exports = new Atendimento