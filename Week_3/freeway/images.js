//CÓDIGOS DAS IMAGENS E SONS

//declarar variáveis para inserir imagens e musicas
var roadImage;
var actorImage;
var actor2Image;

var carRight1;
var carRight2;
var carRight3;

var carLeft1;
var carLeft2;
var carLeft3;

var gameSound;
var checkPointSound;
var hitSound;


//declara a função de pré-carregamento, "escreve na memória"
function preload() {

  //sons
  gameSound = loadSound("sons/trilha.mp3");
  hitSound = loadSound("sons/colidiu.mp3");
  checkPointSound = loadSound ("sons/pontos.wav");

  hitSound2 = loadSound("sons/lutando-quimico.mp3");
  checkPointSound2 = loadSound("sons/gol-quimico.mp3");

  //imagens

  roadImage = loadImage("imagens/estrada.png");
  actorImage = loadImage("imagens/ator-1.png");
  actor2Image = loadImage("imagens/ator-2.png");
  
  //carros que vão para a esquerda
  carLeft1 = loadImage("imagens/carLeft-1.png");
  carLeft2 = loadImage("imagens/carLeft-2.png");
  carLeft3 = loadImage("imagens/carLeft-3.png");
  
  //carros que vão para a direita
  carRight1 = loadImage("imagens/carRight-1.png");
  carRight2 = loadImage("imagens/carRight-2.png");
  carRight3 = loadImage("imagens/carRight-3.png");

  carImagesLeft = [carLeft1, carLeft2, carLeft3]; //lista de imagens carros para a esquerda
  carImagesRight = [carRight1, carRight2, carRight3]; //lista de imagens carros para a direita
}