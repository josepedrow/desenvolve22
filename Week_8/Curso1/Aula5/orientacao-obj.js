//criando uma classe cliente

class Cliente { //começar com Letra Maíscula

    //propriedades da classe
    constructor(nome, email, cpf, saldo) {
            this.nome = nome;
            this.email = email;
            this.cpf = cpf;
            this.saldo = saldo;

        }
        //comportamentos //métodos, não precisa escrever a palavra function
    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }

}

//vamos criar um cliente a partir dessa classe

// new --> cria a instância do objeto Cliente
const andre = new Cliente("André", "andre@email.com", "1122345544", 100);

console.log(andre);

andre.exibirSaldo(); // executa o método exibir saldo na instância André