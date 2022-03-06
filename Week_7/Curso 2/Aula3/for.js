//for

// const numeros = [100,200,300,400,500,600];

// for (let i=0; i <numeros.length; i++) {
//     console.log(i, numeros[i]);
// }

//média

// const notas = [10, 6.5, 8, 7.5];
// let somaDasNotas = 0;

// for (let i=0; i<notas.length; i++){
//     somaDasNotas += notas[i];
// }

// let media = somaDasNotas/notas.length;

// console.log(media);

//media for each

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

//callback parâmetro não é um dado, é outra função
notas.forEach(nota => {
    somaDasNotas +=nota;
})

// alternativamente
// notas.forEach (function(nota)){
//     somaDasNotas += nota;
// })

let media = somaDasNotas/notas.length;

console.log(media);
