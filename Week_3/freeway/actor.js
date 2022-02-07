//CÓDIGOS DO ATOR

//variáveis do ator
var yActor = 400;
var xActor = xRandomActor(); 

function xRandomActor(){
    // *(maximo - minimo) + minimo aleatorio entre (max, min)
    xMax = 460;
    xMin = 11;
    return Math.floor(Math.random() * (xMax - xMin) + xMin)
}
function showActor() {
    
    image(actorImage, xActor, yActor, 35, 35); //vaca
    //image(actor2Image, xActor, yActor, 35, 35); //quimico
}

function moveActor() {
    if (keyIsDown(UP_ARROW)) {
        yActor -= 3;
    }

    if (keyIsDown(DOWN_ARROW)) {
        yActor += 3;
    }

    if (yActor > 370){
        yActor = 370; //para não deixar descer da tela;
    }

    if (keyIsDown(RIGHT_ARROW)){
        xActor +=1;
    }

    if (keyIsDown(LEFT_ARROW)){
        xActor -=1;
    }
    //print(xActor);
}

function showScoreActor(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255,240,60));
    text(scoreActor,250,25);
}