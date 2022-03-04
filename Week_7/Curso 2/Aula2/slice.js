
//slice divide array 

/*
splice()
Consegue remover, um ou mais elementos consecutivos caso o segundo 
tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.
*/

const notas = [1,2,3,4,5,6,7,8,9,10]

const notas1 = notas.slice(0,notas.length/2);
const notas2 = notas.slice(notas.length/2);

console.log(`Notas total: ${notas}`);

console.log(`Notas grupo 1: ${notas1}`);

console.log(`Notas grupo 2: ${notas2}`);