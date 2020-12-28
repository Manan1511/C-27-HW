
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var ground;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });

	Render.run(render);
	ground = new Ground(400,100,600,50);
	bob1 = new Bob(360,200,20);
	bob2 = new Bob(380,200,20);
	bob3 = new Bob(400,200,20);
	bob4 = new Bob(420,200,20);
	bob5 = new Bob(440,200,20);
	rope1 = new Rope(bob1.body, ground.body, -40, 0)
	rope2 = new Rope(bob2.body, ground.body, -20, 0)
	rope3 = new Rope(bob3.body, ground.body, 0, 0)
	rope4 = new Rope(bob4.body, ground.body, 20, 0)
	rope5 = new Rope(bob5.body, ground.body, 40, 0)

	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-25})
}

  drawSprites();

	console.log("bob1",bob1.body.position.x,bob1.body.position.y)
	console.log("bob2",bob2.body.position.x,bob2.body.position.y)
	console.log("bob3",bob3.body.position.x,bob3.body.position.y)
	console.log("bob4",bob4.body.position.x,bob4.body.position.y)
	console.log("bob5",bob5.body.position.x,bob5.body.position.y)
	
 
}



