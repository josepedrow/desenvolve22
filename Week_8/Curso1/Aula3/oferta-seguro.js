//for in 
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

    depositar: function(valor) {
        this.saldo += valor;
    }
}



function oferecerSeguro(obj) {

    const propsClientes = Object.keys(obj); //rodando as propriedades dos clientes
    if (propsClientes.includes("dependentes")) { //se tiver a chave, entra no loop
        console.log(`Oferta de seguro de vida para ${obj.nome}`); //retorna o nome do cliente
    }


}

oferecerSeguro(cliente);

console.log(Object.values(cliente)); //array com os valores

console.log(Object.entries(cliente)); //array com chaves e  valores