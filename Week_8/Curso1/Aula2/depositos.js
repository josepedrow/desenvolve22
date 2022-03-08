const cliente = {
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
    ],
    
    saldo: 100,

    depositar:function(valor){
        this.saldo += valor;
    }
}

console.log(cliente.saldo);

cliente.depositar(30);

console.log(cliente.saldo);

