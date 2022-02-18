    //Criar uma função que receba números como parâmetros 
    //e retorne o valor multiplicado, ex: 2x1 = 2

    var numerosParaMultiplicar = []; //array para recebimento de números a serem multiplicados;
    var respostaMultiplicação = 1; //iniciar variável resposta;
    var numero = 1;


    //solicita qtd de multiplicáveis até que seja informado um valor númerico;
    while (isNaN(quantidadeDeNumeros) !== false) {
        var quantidadeDeNumeros = parseInt(prompt(
        "Atenção! Quantos números você quer multiplicar?")); 
    }

    var contador = 1; //variável contador para o loop while

    while (contador <= quantidadeDeNumeros) {
        var numero = prompt("Informe o número"); //solicita que o usuário escreva o número

        //insere o número no array para posterior multiplicação caso seja um número
        if (isNaN(numero) !== true) {
            numerosParaMultiplicar.push(numero); 
            contador++; //incrementa variável contador;
        } else {
            alert ("Número inválido!");
        }
    }

    for (position = 0; position < numerosParaMultiplicar.length; position++) {
        respostaMultiplicação = respostaMultiplicação * numerosParaMultiplicar[
            position]; //multiplica os elementos do array;

    }

    if (quantidadeDeNumeros != 0) {
        imprimir = `A multiplicação dos números '${numerosParaMultiplicar}' é ${respostaMultiplicação}`;

        console.log(imprimir); //escreve no console a resposta
    } else {
        alerta = "Não há números para multiplicar."
        console.log(alerta);
    }
