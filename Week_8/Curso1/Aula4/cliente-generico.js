//função q receb esses parâmetros, e um método depositar
//função construtora
function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = cpf;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;

    }
}

//nova instância de Cliente criada a partir da função construtora
//andre construído a partir de um obj
const andre = new Cliente("André", "123456789", "andre@email.com", 100);

console.log(andre);