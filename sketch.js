const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  button1=createImg('right.png')
  button1.position(300,50)
  button1.size(50,50)
  button1.mouseClicked(force)
  button2=createImg('up.png')
  button2.position(50,50)
  button2.size(50,50)
  button2.mouseClicked(force2)
  var bo={
    restitution:0.25
  }
  ball=Bodies.circle(200,150,30,bo)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
ellipse(ball.position.x,ball.position.y,30)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  
}
function force2(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}