//SUBIR O SERVIDOR NO AR

const customExpress = require('./config/custon-express')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {

        console.log("Servidor Conectado com sucesso")
        Tabelas.init(conexao)

        const app = customExpress();

        //subir para o servidor
        //definida porta e uma função retorno
        app.listen(3000, () => console.log("servidor rodando na porta 3000"));

        //rodar o servidor no terminal
    }
})