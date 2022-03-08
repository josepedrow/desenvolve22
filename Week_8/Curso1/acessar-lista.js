const cliente = {
    nome: "José",
    idade: "30",
    cpf: "123456789",
    email: "teste@teste.com"
}
const chaves = ["nome", "idade", "cpf", "email"];

//acessando com variáveis

// console.log(cliente[chaves[0]]); //notação de  [] ao invés de .

// chaves.forEach(info => console.log(cliente[info]));

//imprimindo todas as informações
chaves.forEach(function(info) {
    console.log(cliente[info]);
})