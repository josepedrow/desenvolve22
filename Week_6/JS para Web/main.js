function tocaSomPom() {

    document.querySelector('#som_tecla_pom').play();

}

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //todas as teclas salvas como lista, constante

listaDeTeclas[0].onclick = tocaSomPom;

listaDeSons = ['#som_tecla_pom', '#som_tecla_clap', '#som_tecla_tim', '#som_tecla_puff', '#som_tecla_splash',
    '#som_tecla_toim', '#som_tecla_psh', '#som_tecla_tic', '#som_tecla_tom'
]

let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]; //tecla clicada
    const instrumento = tecla.classList[1]; //classe da tecla clicada
    //template string
    const idAudio = `#som_${instrumento}`; //string iniciada com crase (concatena);

    tecla.onclick = function() { //função anônima para chamar o tocaSom apenas quando há interação
        tocaSom(idAudio);
    };
    contador++;

    console.log(contador);
}