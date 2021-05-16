
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1, box2,box3,box4,box5,box6;
var box7,box8,box9,box10;
var box11, box12, box13,box14,box15,box16,box17;
var box18,box19,box20,box21,box22,box23,box24,box25;

var wreckingBall;
var chain;
var ground;
var aiEngine;
var aiWorld;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	aiEngine = Engine.create();
	aiWorld = aiEngine.world;

	//Create the Bodies Here.
	box1 = new Box(400,350);
	box2 = new Box(400,350);
	box3 = new Box(400,350);
	box4 = new Box(400,350);
	box5 = new Box(400,350);
	box6 = new Box(400,350);
	box7 = new Box(400,350);
	box8 = new Box(400,350);

	box9 = new Box(450,350);
	box10 = new Box(450,350);
	box11 = new Box(450,350);
	box12 = new Box(450,350);
	box13 = new Box(450,350);
	box14 = new Box(450,350);
	box15 = new Box(450,350);
	box16 = new Box(450,350);

	box17 = new Box(500,350);
	box18 = new Box(500,350);
	box19 = new Box(500,350);
	box20 = new Box(500,350);
	box21 = new Box(500,350);
	box22 = new Box(500,350);
	box23 = new Box(500,350);
	box24 = new Box(500,350);
	box25 = new Box(500,350);

	ground = new Ground();
	wreckingBall = new WreckingBall();
	chain = new Chain({x:160,y:50},wreckingBall.ball);
  
}


function draw() {
//   rectMode(CENTER);
  background(255);
  
  Engine.run(aiEngine);

	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();
	box19.display();
	box20.display();
	box21.display();
	box22.display();
	box23.display();
	box24.display();
	box25.display();

	ground.display();
	wreckingBall.display();
	chain.display();
//   drawSprites();
 
}

function mouseDragged(){
	Body.setPosition(wreckingBall.ball,{x:mouseX,y:mouseY});
}