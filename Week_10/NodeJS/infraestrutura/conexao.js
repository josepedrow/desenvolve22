const mysql = require("mysql")

//criar conexao
const conexao = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "Eu290292jP***",
    database: "agenda-petshop"
})

//exportar conexao
module.exports = conexao