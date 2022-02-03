//CÓDIGOS DO ATOR

//variáveis do ator
var yActor = 366;
var xActor = 100;


function showActor() {
    image(actorImage, xActor, yActor, 30, 30); //vaca
}

function moveActor() {
    if (keyIsDown(UP_ARROW)) {
        yActor -= 3;
    }

    if (keyIsDown(DOWN_ARROW)) {
        yActor += 3;
    }
}