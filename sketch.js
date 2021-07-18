//declaring the variable
var ship ,ship_running;
var edges;
var sea;

function preload(){
  
  ship_running=loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png,");
seaImage=loadImage("sea.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 ship=createSprite(50,160,20,50);
 ship.addAnimation("running",ship_running);
 ship.scale=0.5;



 edges=createEdgeSprites();

 //create ground sprite
sea=createSprite(200,180,400,400);
sea.addImage("sea",seaImage);
}

function draw(){
  background("black")
  sea.velocityX=-2;

  if (keyDown("space")) {
    ship.velocityY=-10;
  }

  //adding gravity
  ship.velocityY=ship.velocityY+0.8;

  //infinte scrolling effect
  if(sea.x<0){
    sea.x= sea.width/2;
  }

  ship.collide(sea);
  
  drawSprites();
}
