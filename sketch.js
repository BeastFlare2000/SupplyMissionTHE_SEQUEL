var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var basketPiece1, basketPiece2, basketPiece3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 basketPiece1 = createSprite(400,654,70,12)
	 basketPiece2 = createSprite(359,630,12,70)
	 basketPiece3 = createSprite(441,630,12,70)

	 basketPiece1.shapeColor = 'red'
     basketPiece2.shapeColor = 'red'
     basketPiece3.shapeColor = 'red'

	 basketPiece1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, basketPiece1);
	 basketPiece2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, basketPiece2);
	 basketPiece3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, basketPiece3);   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false)
    
  }
}



