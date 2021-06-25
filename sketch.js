
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hintbutton

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	textSize(25);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
  
}

function podium() {
	createSprite(100, 200, 5, 250);
	createSprite(148, 75, 100, 5);
	createSprite(100, 325, 100, 5);
	createSprite(200, 88, 5, 30),
	fill ("white");
}

function letterbank() {
	text("Letter Bank:", 500, 100);
	text("	A	B	C	D	E	F	G	H	I	J", 400, 150);
	text("	K	L	M	N	O	P	Q	R	S	T", 400, 200);
	text("	U	V	W	X	Y	Z", 460, 250);
}

function hintdisplay() {
	hintbutton = createButton ("Hint");
	hintbutton.position (530, 320);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  podium();
  letterbank();
  hintdisplay();
  drawSprites();
 
}



