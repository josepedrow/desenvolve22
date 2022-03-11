function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = cpf;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;

    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo); //vai no construtor Cliente e chama as propriedades que vc quiser
    this.saldoPoup = saldoPoup;
}

const ju = new ClientePoupanca("Ju", "454879141", "ju@email.com", 152, 200);

console.log(ju);

//criar um objetor depositarPoup 
//acessa o obj e add ao protótipo desse objeto um novo método, q nesse caso eh a função
//mesmo princípio objeto.propriedade = "valor"
ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor;
}

ju.depositarPoup(30);

console.log(ju.saldoPoup);

