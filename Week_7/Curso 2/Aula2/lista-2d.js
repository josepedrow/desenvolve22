
//lista de duas dimensões

const alunos = ['João', "Ju", "Caio", "Ana"];

const mediaDosAlunos = [10, 7, 9, 6];
                            // [alunos] 0  /[medias]1
let listaDeNotasEAlunos = [alunos,          mediaDosAlunos];

console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}.`);