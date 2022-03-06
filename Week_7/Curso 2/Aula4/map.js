const notas = [10,9,8,7,6];

const notasAtualizadas = notas.map( nota => nota == 10 ? 
    nota : ++nota); //aumena 1 ponto e verifica se for 10 para n executar o código

console.log(notasAtualizadas); 

//map retorna um array 