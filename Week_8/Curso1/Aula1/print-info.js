const cliente = {
    nome: "José",
    idade: "30",
    cpf: "123456789",
    email: "teste@teste.com"
}

console.log(`O nome do cliente é: ${cliente.nome } e tenho ${cliente.idade} anos`);

//substring
console.log(cliente.cpf.substring(0, 3)) //mostrar os 3 primeiros dígitos

// console.log(`O nome do cliente é: ${cliente.nome }`);
// console.log(`A idade do cliente é: ${cliente.idade }`);
// console.log(`O cpf do cliente é: ${cliente.cpf }`);
// console.log(`O cpf do cliente é: ${cliente.email }`);