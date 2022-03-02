//exemplo de função toca som específica
function tocaSomPom() {

    document.querySelector('#som_tecla_pom').play();

}

//toca som Genérico
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //todas as teclas salvas como lista, constante

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]; //tecla clicada
    const instrumento = tecla.classList[1]; //classe da tecla clicada que é o nome do instrumento
    //template string
    const idAudio = `#som_${instrumento}`; //string iniciada com crase (concatena);

    tecla.onclick = function() { //função anônima para chamar o tocaSom apenas quando há interação
        tocaSom(idAudio); //chama a função toca som
    };

}