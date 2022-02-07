//CÓDIGO DO CARRO

//listas carros esquerda

var xCarsLeft = [-50,-50, -50]; //os xCar que vão para a direita
var yCarsLeft = [210, 270, 318]; //os yCar, posicionamento nas faixas indo para a esquerda
var speedCarsLeft = [4.2, 2.8, 1.6] //velocidades dos carros indo para a esquerda

//listas carros direita

var xCarsRight = [600, 600, 600]; //os xCar que vão oara a esquerda
var yCarsRight = [40, 95, 150]; //os yCar, posicionamento nas faixas indo para a direita
var speedCarsRight = [2.6, 3.2, 2] //velocidades dos carros indo para a direita


//detectar colisão
var hitLeft = false;
var hitRight = false;

//tamanho do carro
var carWidth = 50;
var carHeight = 40;

//pontuação;
var scoreActor = 0;

//variáveis do carro1
//var xCar = 600; // fora da tela
//var yCar = 40;
//var speedCar = 2;

//variáveis do carro2
//var xCar2 = 600; // fora da tela
//var yCar2 = 95;
//var speedCar2 = 2.5;

//variáveis do carro3
//var xCar3 = 600; // fora da tela
//var yCar3 = 150;
//var speedCar3 = 3.2;


function showCar() {

    //para a esquerda
    
    for (var i = 0; i < carImagesLeft.length; i++) {
        image(carImagesLeft[i], xCarsLeft[i], yCarsLeft[i], 50, 40); //desenhar os carros
        //50 e 40 comprimento e altura da imagem
    }

    //para a direita
    for (var i = 0; i < carImagesRight.length; i++) {
        image(carImagesRight[i], xCarsRight[i], yCarsRight[i], 50, 40); //desenhar os carros
        //50 e 40 comprimento e altura da imagem
    }

}

function moveCar() {

    //velocidades em x para a esquerda;
    for (var i = 0; i < carImagesLeft.length; i++) {
        xCarsLeft[i] -= speedCarsLeft[i] //altera a posição x do carro 1
        //console.log(xCarsLeft[0]);
    }

    //velocidades em x para a direita;
    for (var i = 0; i < carImagesRight.length; i++) {
        xCarsRight[i] += speedCarsRight[i] //altera a posição x do carro 1
        //console.log(xCarsRight[0]);
    }

    //xCars[0] -= speedCars[0] //altera a posição x do carro 1
    //xCars[1] -= speedCars[1] //altera a posição x do carro 2
    //xCars[2] -= speedCars[2] //altera a posição x do carro 3
}

function restartCarPosition() {

    //carros da esquerda
    for (i = 0; i < carImagesLeft.length; i++) {
        if (xCarsLeft[i] < -50) {
            xCarsLeft[i] = 600;
        }
    }

    //carros da direita
    for (i = 0; i < carImagesRight.length; i++) {
        if (xCarsRight[i] > 520) {
            xCarsRight[i] = -50;
        }
    }

    /*if (xCars[0] < -50) {
        xCars[0] = 600;
    }
 
    if (xCars[1] < -50) {
        xCars[1] = 600;
    }
 
    if (xCars[2] < -50) {
        xCars[2] = 600;
    }*/
}

function checkCollision() {

    //esquerda
    for (i = 0; i < carImagesLeft.length; i++) {
        hitLeft = collideRectCircle(xCarsLeft[i], yCarsLeft[i], carWidth, carHeight,
            xActor, yActor, 18); // o 18 é o tamanho do círculo (vaca);
        
        if (hitLeft) {
            hitSound.play();// toca som da colisão
            //hitSound2.play(); //quimico
            restartActorPosition();
            //console.log("colidiu");
        }
    }

    //direita
    for (i = 0; i < carImagesRight.length; i++) {
        hitRight = collideRectCircle(xCarsRight[i], yCarsRight[i], carWidth, carHeight,
            xActor, yActor, 18); // o 18 é o tamanho do círculo (vaca);
        if (hitRight) {

            hitSound.play();// toca som da colisão
            //hitSound2.play(); //quimico
            restartActorPosition();
            //console.log("colidiu");
        }
    }
    

}

function restartActorPosition() {
    //se colidiu retorno ao início
    yActor = 370;
    xActor = xRandomActor(); //retorna pos X aleatória
    scoreActor--; //perde um ponto
    checkScore(); //verifica pontuação

}

function checkPoint() {
    //console.log(yActor);
    if (yActor < 6) {
        //console.log("GANHOU");
        checkPointSound.play(); //toca som de pontuação
        //checkPointSound2.play(); //quimico
        yActor = 370; //faz retornar ao início
        xActor = xRandomActor(); //retorna pos X aleatória
        scoreActor++; //aumenta a pontuação do ator;
    }
    //para não deixar atravessar para cima da tela
    if (yActor < 0) {
        yActor = 0;
    }
}

function checkScore() {
    if (scoreActor < 0) {
        console.log("perdeu tudo");
        scoreActor = 0;
    }
}