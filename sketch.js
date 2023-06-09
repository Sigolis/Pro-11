let ship;
let seaImg;
var sea;
var shipAnimation;

function preload() {
  shipAnimation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImg = loadImage("sea.png");


}

function setup() {
  createCanvas(2000, 1000);

//addImage
  sea = createSprite(1000,500);
  sea.addImage(seaImg);

  
  ship = createSprite(475, 450);
  ship.addAnimation("ship", shipAnimation);
}

function draw() {
  /*
  if (ship.position.y < seaImg.height) {
    background(seaImg);
  } else {
    background("lightblue");
  }
  ship.position.y += sin(millis() * 0.001) * 2;

  */
 //colocar uma velocidade x

 background("lightblue");
 sea.velocityX = 2;
if(sea.x < 0){
  sea.x = sea.width/2;
}

  drawSprites();
}

