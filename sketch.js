const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var canvas;
var platform;

var balle = [];
var plinkos = [];
var wall = [];

function preload() {
  back = loadImage("images/back.jpg");
  sun = loadImage("images/s1.png");
  mount = loadImage("images/m1.png");
  cloud = loadImage("images/c1.png");
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  platform = new Ground(width / 2, height, width, 50);

  for (var a = 25; a <= width; a = a + 45) {
    plinkos.push(new Obstical(a, 100))
  }
  for (var a = 0; a <= width; a = a + 45) {
    plinkos.push(new Obstical(a, 150))
  }
  for (var a = 25; a <= width; a = a + 45) {
    plinkos.push(new Obstical(a, 200))
  }
  for (var a = 0; a <= width; a = a + 45) {
    plinkos.push(new Obstical(a, 250))
  }
  for (var a = 25; a <= width; a = a + 45) {
    plinkos.push(new Obstical(a, 300))
  }
  for (var a = 0; a <= width; a = a + 45) {
    plinkos.push(new Obstical(a, 350))
  }
  for (var a = 25; a <= width; a = a + 45) {
    plinkos.push(new Obstical(a, 400))
  }
  for (var a = 0; a <= width; a = a + 45) {
    plinkos.push(new Obstical(a, 450))
  }
  for (var a = 0; a <= width; a = a + 70) {
    wall.push(new Pillar(a, 660))
  }
  
}

function draw() {
  background(0,0,0);
  if(frameCount % 100 === 0){
    particle = new Ball(random(0, width), 0, 7);
    balle.push(particle);
  }
  Engine.update(engine);

  image(back, width / 2, height / 2, width, height);
  image(sun, width / 2 - 15, height - 60, 600, 600);
  image(mount, width / 2 + 400, height / 2 + 310, width / 2, 100);
  image(mount, 390, height / 2 + 310, width / 2 + 20, 100);
  image(cloud, width / 2, height / 2, width, height);



  for (var a = 0; a < balle.length; a++) {
    balle[a].display();
  }

  for (var a = 0; a < plinkos.length; a++) {
    plinkos[a].display();
  }
  for (var a = 0; a < wall.length; a++) {
    wall[a].display();
  }
  platform.display();
}
