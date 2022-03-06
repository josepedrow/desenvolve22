//lista de duas dimensões

const alunos = ['João', "Ju", "Caio", "Ana"];

const mediaDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {

    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {

        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);

        return listaDeNotasEAlunos[0][indice] + ' sua média é: ' +
            listaDeNotasEAlunos[1][indice];

    } else {
        return "Aluno não listado";
    }
}

console.log(exibeNomeNota("Ju"));

//for
