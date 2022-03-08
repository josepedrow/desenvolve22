const cliente = {
    nome: "José",
    idade: 30,
    cpf: "123456789",
    email: "teste@teste.com",
    fones: ["5599998545", "1589898445"]

}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNascimento: "20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome="Sara Silva";

console.log(cliente);