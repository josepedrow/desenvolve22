//tipo de dado

//conversão implícita
const numero =456;
const numeroString = "456";

// console.log(numero === numeroString); //comparando valor e tipo

// console.log(numero == numeroString); //comparando valor , 456 foi convertido para string

// console.log (numero +numeroString); //concatenou pq numero virou string


//conversão explícita

// Number()
// String()

console.log (numero +Number(numeroString)); //permite a soma agora
