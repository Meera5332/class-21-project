
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var right
var left
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    var ball_options={
		isStatic:false,
		restitution:0.3,
        friction:0,
        density:1.2
	}
	//Create the Bodies Here.
  ground = new Ground(400, 550,800, 10)
  right = new Ground(500, 495, 10, 100)
  left = new Ground(650, 495, 10, 100)
    ball = Bodies.circle(100, 100, 20, ball_options)
    World.add(world,ball)
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  right.display()
  left.display()
  ellipse(ball.position.x,ball.position.y, 20)
  drawSprites();
  
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.5,y:-0.5})
  }
}

