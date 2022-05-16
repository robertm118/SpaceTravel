let x, y;
let max;
let galaxy;
let ship;
let alien;

//Preloading images
function preload(){
  ship = loadImage ('spaceship.png');
  alien = loadImage ('alien.png');
}

//Setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height;
  max = (x,150);
  noCursor();
  
}

//Draw
function draw() {
  //background with transparancy
  background(0,0,35,25);
  
  //Text
  textSize(32);
  fill('#E8F3EE');
  text('Space Travel',100,350);
  
  //blinking stars
  var galaxy = {
  locationX : random(width),
  locationY : random(height),
  size : random(1,5)
}
  
  //LoadingMouse
  image(alien,mouseX,mouseY,60,40);
  //LoadingShip
  image(ship,x, y, 150, 150);
  
  //Stars
  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size,   galaxy.size);

  
  //Jiggle
  x = x + random(-1, 1);
  // Movement + Speed
  y = y - 1;
  // Stop at Max Height
  if (y <= 150) {
  y = max;
}
  
  
}