var sea, ship;
var seaImg, shipImg;

function preload(){
seaImg = loadImage("sea.png");
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200,50,50);
  sea.addImage("sea1",seaImg);
sea.scale=0.5;
sea.velocityX=-4;

ship = createSprite(200,200,50,50);
  ship.addAnimation("ship1",shipImg);
ship.scale=0.3;
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x = width/2;
  }

  drawSprites();
}