
function setup() {
  createCanvas(500, 400);
  gameSound.loop(); 
  gameSound.setVolume(0.2);
}

function draw() {
  background(roadImage);
  showActor();
  showCar();
  moveCar();
  moveActor();
  restartCarPosition();
  checkCollision();
  checkPoint();
  showScoreActor();

}