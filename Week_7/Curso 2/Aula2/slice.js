
//slice divide array 

/*
slice()
Copia uma parte do array para outro array.

*/

// const notas = [1,2,3,4,5,6,7,8,9,10];

// const notas1 = notas.slice(0,notas.length/2);
// const notas2 = notas.slice(notas.length/2);

// console.log(`Notas total: ${notas}`);

// console.log(`Notas grupo 1: ${notas1}`);

// console.log(`Notas grupo 2: ${notas2}`);


/*
splice()
Consegue remover, um ou mais elementos consecutivos caso o segundo 
tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.
*/

const notas = [1,2,3,4,5,6,7,8,9,10];

//notas.splice(0,2,1000);

//pode utilizar não apenas para remover, mas para add entre valores
notas.splice (3,0, 1000);
console.log(notas);
