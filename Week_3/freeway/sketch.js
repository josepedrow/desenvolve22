
function setup() {
  createCanvas(500, 400);

}

function draw() {
  background(roadImage);
  showActor();
  showCar();
  moveCar();
  moveActor();
  restartCarPosition();

}