//CÓDIGOS DAS IMAGENS

//declarar variáveis para inserir imagens e musicas
var roadImage;
var actorImage;
var carImage;
var carImage2;
var carImage3;



//declara a função de pré-carregamento, "escreve na memória"
function preload() {
    roadImage = loadImage("imagens/estrada.png");
    actorImage = loadImage("imagens/ator-1.png");
    carImage = loadImage("imagens/carro-1.png");
    carImage2 = loadImage("imagens/carro-2.png");
    carImage3 = loadImage("imagens/carro-3.png");
    carImages = [carImage,carImage2,carImage3]; //lista de imagens carros
  }