//juntar listas
/*

concat()
Junta dois arrays, colocando o array passado como argumento, 
logo depois do primeiro. Em português essa operação é conhecida como concatenação.
*/ 


/*

concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. 
Caso isso não seja necessário, considere utilizar push() ou splice() 
para inserir novos elementos ou fazer alterações no array original.

*/
const salaPython = [ "JP", "Amanda", "Cris"];

const salaJS= ["Ju","Leo","Raquel"];

const salasJuntas = salaPython.concat(salaJS);

console.log(salasJuntas);
