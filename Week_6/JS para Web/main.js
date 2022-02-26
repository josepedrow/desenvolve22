function tocaSomPom() {

    document.querySelector('#som_tecla_pom').play();

}

const listaDeTeclas = document.querySelectorAll('.tecla'); //todas as teclas salvas como lista, constante

listaDeTeclas[0].onclick = tocaSomPom;

console.log(listaDeTeclas);