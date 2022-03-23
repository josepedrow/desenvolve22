//controller de atendimento

const Atendimento = require('../models/atendimentos') //importando
    //para exportar o módulo
module.exports = app => {

    //GERENCIAR ROTA DE ATENDIMENTO
    //req solicitado, res responda
    //usando o nodemon as atualizações do servidor são automáticas agora

    // app.get("/atendimentos", (req, res) => res.send("Você está na rota de atendimentos e está realizando um GET")); // /atendimentos será uma página
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    //get de um id específico

    app.get('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)
        Atendimento.buscaPorId(id, res)
    })

    //cliente enviando algo
    app.post("/atendimentos", (req, res) => {
        // console.log(req.body)
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)


    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })

}