//operador de espalhamento - Lista de espalhamento
//spread operator

const clientes = [{
            nome: "José",
            idade: 30,
            cpf: "123456789",
            email: "teste@teste.com",
            fones: ["5599998545", "1589898445"],
            dependentes: [{
                    nome: "Sara",
                    parentesco: "filha",
                    dataNascimento: "10/04/2003"
                },

                {
                    nome: "Lucas",
                    parentesco: "filho",
                    dataNascimento: "10/04/2013"
                }
            ]
        },


        {
            nome: "Amanda",
            idade: 31,
            cpf: "15489452129",
            email: "blabla@teste.com",
            fones: ["5599998545", "1589898445"],
            dependentes: [{
                    nome: "Filho1",
                    parentesco: "filha",
                    dataNascimento: "10/04/2012"
                },

                {
                    nome: "Filho2",
                    parentesco: "filho",
                    dataNascimento: "10/04/2018"
                }
            ]
        }
    ]
    // const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]; //operador de espalhamento, cria um array

const listaDependentes = [];

for (let i = 0; i < clientes.length; i++) {

    listaDependentes.push(...clientes[i].dependentes);
}



console.log(listaDependentes);