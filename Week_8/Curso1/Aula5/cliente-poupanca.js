//aproveitar a Clase Cliente criada antes

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

//usar herança para pegar os atributos da Classe
//ClientePoupanca herda de Cliente
class ClientePoupanca extends Cliente {
    //o que é específico da Poupança
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        //passar para o super consturir o cliente e add a info de poupanca
        super(nome, email, cpf, saldo); //tipo o call, puxa o que ele vai herdar.
        this.saldoPoupanca = saldoPoupanca; //cria o novo atributo para o CLiente
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }

    exibirSaldoPoupanca() {
        console.log(this.saldoPoupanca);
    }

}

//add cliente poup

const andre = new ClientePoupanca("André", "andre@email.com", "1254564812", 100, 250);

console.log(andre);

andre.depositar(50);
andre.depositarPoupanca(350);

console.log(andre);