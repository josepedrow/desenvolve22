//variáveis da bolinha
var xBolinha = 300;
var yBolinha = 200;
var diamentroBolinha = 15;
var raio = diamentroBolinha / 2;

//velocidade da bolinha
var velocidadeXBolinha = 6;
var velocidadeYBolinha = 6;

//variáveis da raquete jogador
var xRaquete = 5;
var yRaquete = 150;
var espessuraRaquete = 10;
var alturaRaquete = 90;
var velocidadeYOponente;
var colidiu = false;


//variáveis da raquete oponente
var xRaqueteOponente = 585;
var yRaqueteOponente = 150;
var colidiuOponente = false;
var chanceDeErrar = 0;

//placar do jogo
var meusPontos = 0;
var pontosDoOponente = 0;

//sons do jogo
var raquetada;
var ponto;
var trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop(); //carrega o som do jogo em loop. Se for .play toca uma vez so
}

function draw() {

  background(0); //cor do fundo 
  desenhaBolinha();
  movimetaBolinha();
  verificaColisaoBolinhaBorda();

  //raquete jogador
  mostraRaquete(xRaquete,yRaquete);

  //raquete oponente
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);

  movimentaRaqueteJogador();

  movimentaRaqueteOponente();

  //colisão raquete jogador
  verificaColisaoRaquete(xRaquete,yRaquete);

  //colisão raquete oponente
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);

  //para corrigir o bug da bolinha presa
  bolinhaNaoFicaPresa();
   
  //mostra o placar e avalia pontuação
  incluiPlacar();
  marcarPonto();
  
}

function desenhaBolinha() {

  //desesenhando a bolinha e movimentando ela em X e Y;
  circle(xBolinha, yBolinha, diamentroBolinha);
}

function movimetaBolinha() {
  xBolinha += velocidadeXBolinha; //deslocar em X
  yBolinha += velocidadeYBolinha; //deslocar em Y
}

function verificaColisaoBolinhaBorda() {

  //se tiver tocando a borda X
  if (xBolinha + raio > width ||
    xBolinha - raio < 0) {
    velocidadeXBolinha *= -1; //inverte a velocidade
    
  }


  //se tiver tocando a borda Y
  if (yBolinha + raio > height ||
    yBolinha - raio < 0) {
    velocidadeYBolinha *= -1; //inverte a velocidade
  }

}

function bolinhaNaoFicaPresa(){
  if (xBolinha + raio < 0){
  console.log('bolinha ficou presa');
  xBolinha = 300;
  }
}

function mostraRaquete(x,y) {
  rect(x, y, espessuraRaquete, alturaRaquete);
}

function raqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponente, 
    espessuraRaqueteOponente, alturaRaqueteOponente);
}

function movimentaRaqueteJogador() {

  yRaquete = mouseY; //movimentar com o mouse
  
  /*
  //movimentar com o teclado
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 8;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 8;
  }
  */
  
}

function verificaColisaoRaqueteOld() {

  //se tiver tocando na raquete
  if (xBolinha - raio < xRaquete + espessuraRaquete &&
    yBolinha - raio < yRaquete + alturaRaquete &&
    yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1; //inverte a velocidade
  }

}


function verificaColisaoRaquete (x,y){

  colidiu = collideRectCircle(x, y, espessuraRaquete, alturaRaquete, 
    xBolinha, yBolinha, raio);

  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
    console.log("colisão");
  }
}


function movimentaRaqueteOponente (){
  //calculando a velocidade da raquete
  velocidadeYOponente = yBolinha -yRaqueteOponente - espessuraRaquete/ 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar();
  
}

function incluiPlacar(){
  stroke(255);//borda branca;
  textAlign(CENTER);
  textSize(16); //tamanho da fonte
  fill (color(255,140,0));
  rect(450,10,40,20); //caixa em torno dos ponto
  rect(150,10,40,20);

  //text("Você", 120,26);
  fill(255); //cor branco da letra
  text(meusPontos,170,26);
  


  //text("Computador", 220,26);
  fill(255); //cor branco da letra
  text(pontosDoOponente,470,26);
  
  
}

function marcarPonto(){
  if (xBolinha > 590) {
    meusPontos +=1;
    ponto.play();
  }

  if (xBolinha < 10) {
    pontosDoOponente +=1;
    ponto.play();
  }
}


function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

