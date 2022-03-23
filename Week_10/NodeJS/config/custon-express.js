//CONFIGURAÇÕES

//chamar modulos, importá-los
const express = require("express")
const consign = require("consign")
const bodyParser = require("body-parser")

module.exports = () => {

    //criar um aplicativo
    const app = express()

    //add bibliotecas par usar no express
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())


    //modulos de controles para serem acessados pelo app
    consign()
        .include("controllers")
        .into(app)

    return app

}