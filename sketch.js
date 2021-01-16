const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,bodies;
var ground;

function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var groundoptions = {
  isStatic:true
}
ground = Bodies.rectangle(200,390,400,20,groundoptions);
World.add(world,ground);
console.log(ground);
var bodiesoptions = {
  restitution:1.3
}
bodies = Bodies.circle(200,100,30,bodiesoptions);
World.add(world,bodies);
}

function draw() {
  background(89,217,168);
 Engine.update(engine);
  rectMode(CENTER);  
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(CENTER);
ellipse(bodies.position.x,bodies.position.y,30,30);
}
