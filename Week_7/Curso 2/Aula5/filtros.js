const nomes = [ "Ana", "Marcos", "Maria", "Mauro"];
const notas = [7,4.5,8,7.5];

//filter retorna true ou false e baseado nisso tem a resposta
// const reprovados =  nomes.filter ((aluno,indice) => notas
// [indice] <5 );

// console.log(`reprovados: ${reprovados}`);

//como o aluno não é usado, pode trocar por _
const reprovados =  nomes.filter ((_,indice) => notas
[indice] <5 );

console.log(`reprovados: ${reprovados}`);