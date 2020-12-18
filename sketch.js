
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gamestate = 1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
	dustbin1 = new dustbin(400,700,800,30)
	dustbin2 = new dustbin(400,670,300,30)
	dustbin3 = new dustbin(250,700,30,300)
	dustbin4 = new dustbin(550,700,30,300)
	//Create the Bodies Here.
    paperball1 = new paperball (100,100,50);
    
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  paperball1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbin4.display();
  if(keyDown("DOWN_ARROW")&&gamestate === 1){
	  Matter.Body.applyForce(paperball1.body,paperball1.body.position,{x:185,y:1215})
      gamestate = 0
	}
  drawSprites();
 
}



