const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
// dividers
var dividers = [];

// plinko rows
var plinkos = [];

// particles
var particles = [];

function setup() {
  createCanvas(480, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 700, 480, 50);

  // create the dividers
  for (var x = 0; x <= width; x = x + 80) {
    dividers.push(new Divider(x, 1100));
  }

  // create the plinko rows
  for (var x = 40; x <= width - 10; x = x + 50) {
    plinkos.push(new Plinko(x, 100));
    plinkos.push(new Plinko(x, 250));
  }

  for (var x = 15; x <= width - 10; x = x + 50) {
    plinkos.push(new Plinko(x, 175));
    plinkos.push(new Plinko(x, 325));
  }

}

function draw() {
  background("black");
  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if (frameCount % 90 === 0) {
    particles.push(new Particle(random(width / 2 - 100, width / 2 + 100), 30));
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }

  for (var i = 0; i < dividers.length; i++) {
    dividers[i].display();
  }

  ground.display();
  drawSprites();
}

