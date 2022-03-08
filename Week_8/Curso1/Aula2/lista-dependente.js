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
    }]

}
//console.log(cliente);

//adicionando os dependentes como itens do array
//ao chamar o push, o nome item irá compor o array;

cliente.dependentes.push({
        nome: "Lucas",
        parentesco: "filho",
        dataNascimento: "10/04/2013"
    }
)

//console.log(cliente);

const filhoMaisNovo = cliente.dependentes.filter
(dependente => dependente.dataNascimento === "10/04/2013")

console.log(filhoMaisNovo[0].nome);



