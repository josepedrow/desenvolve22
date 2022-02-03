//CÓDIGO DO CARRO

//listas
var yCars = [40, 95, 150]; //os yCar
var speedCars = [2, 2.5, 3.2] //velocidades dos carros;
var xCars = [600, 600, 600]; //os xCar


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

    for (var i = 0; i < carImages.length; i++) {
        image(carImages[i], xCars[i], yCars[i], 50, 40); //desenhar os carros
        //50 e 40 comprimento e altura da imagem
    }

}

function moveCar() {
    //velocidades em x;
    xCars[0] -= speedCars[0] //altera a posição x do carro 1
    xCars[1] -= speedCars[1] //altera a posição x do carro 2
    xCars[2] -= speedCars[2] //altera a posição x do carro 3
}

function restartCarPosition() {
    if (xCars[0] < -50) {
        xCars[0] = 600;
    }

    if (xCars[1] < -50) {
        xCars[1] = 600;
    }

    if (xCars[2] < -50) {
        xCars[2] = 600;
    }
}