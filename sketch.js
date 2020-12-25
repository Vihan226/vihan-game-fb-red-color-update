var wall1;
var wall2;
var bird;
var wall1Img;
var wall2Img;
var birdImg;
var gameState= "play";

var rect;
var score;
var h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22,h23,h24,h25,h26;
var w3,w4,w5,w6,w7,w8,w9;
var r1,r2,r3,r4;
function preload(){
wall1Img= loadImage(" Screenshot (39).png")
wall2Img= loadImage("Screenshot (39).png")
birdImg= loadImage("usebird.png")
}
function setup() {
  createCanvas(1350, 600);
  
  wall1=createSprite(1500,50,10,10)
  wall1.addImage("wall1",wall1Img)
  wall1.scale=3;

  wall2=createSprite(1500,550,10,10)
  wall2.addImage("wall2",wall2Img)
  wall2.scale=3;

  bird=createSprite(500,200)
  bird.addImage("bird",birdImg)
  bird.scale=.5
  
  rect=createSprite(600,500,1600,1000)
  rect.visible= false

  h1=createSprite(1500,300,1,100)
  h1.visible=false;

  w3=createSprite(2300,50)
  w3.addImage("w3",wall1Img)
  w3.scale=5

  h2=createSprite(2300,470,1,200)
  h2.visible=false;

  w3=createSprite(2300,50)
  w3.addImage("w3",wall1Img)
  w3.scale=5

  w4=createSprite(3000,50)
  w4.addImage("w3",wall1Img)
  w4.scale=2
 
  w5=createSprite(3000,500)
  w5.addImage("w3",wall1Img)
  w5.scale=3
  
  h3=createSprite(3000,270,1,100)
  h3.visible=false;

  w6=createSprite(3600,450)
  w6.addImage("w6",wall2Img)
  w6.scale=5
  h4=createSprite(3600,80,1,100)
  h4.visible=false

  r1=createSprite(4000,400,250,20);
  r1.shapeColor="green"
  r2=createSprite(4700,300,350,20);
  r2.shapeColor="orange"
  r3=createSprite(5400,200,450,20);
  r3.shapeColor="red"
  r4=createSprite(6100,100,450,20);
  r4.shapeColor="blue"
  score=0
  
}

function draw() {
  background(200,20,20);
  if(gameState==="play"){
    fill("blue")
    textSize(40)
    text("Score: "+score,600,100)
wall1.velocityX=-8;
wall2.velocityX=-8;
h1.velocityX=-8;
w3.velocityX=-8;
h2.velocityX=-8;
w4.velocityX=-8;
w5.velocityX=-8;
h3.velocityX=-8;
w6.velocityX=-8;
h4.velocityX=-8;
r1.velocityX=-8;
r2.velocityX=-8;
r3.velocityX=-8;
r4.velocityX=-8;

//bird.bounce(r1)
if(mousePressedOver(rect)){
  bird.velocityY=-9;
}
if(keyDown("w")){
  bird.velocityY=-7
}
bird.velocityY=bird.velocityY+1;
if(bird.isTouching(h1)){
  score=score+1
}
if(bird.isTouching(h2)){
  score=score+1
}
if(bird.isTouching(h3)){
  score=score+1
}
if(bird.isTouching(h4)){
  score=score+1
}
if(touches.length > 0) {
  bird.velocityY = -7;
   touches = [];
}
if(bird.isTouching(r1)){
  bird.collide(r1)
}
if(bird.isTouching(r2)){
  bird.collide(r2)
}
if(bird.isTouching(r3)){
  bird.collide(r3)
}
if(bird.isTouching(r4)){
  bird.collide(r4)
}
if(bird.isTouching(wall1)|| bird.isTouching(wall2)|| bird.isTouching(w3)||bird.isTouching(w4)|| bird.isTouching(w5)||bird.isTouching(w6)){
  bird.x=-200
  //alert("Gameover: You can keep on pressing OK or reload the game!- Score: "+score)
  background("black")
 /* wall1.velocityX=0;
wall2.velocityX=0;
h1.velocityX=0;
w3.velocityX=0;
h2.velocityX=0;
w4.velocityX=0;
w5.velocityX=0;
h3.velocityX=0;
w6.velocityX=0;
h4.velocityX=0;
r1.velocityX=0;
r2.velocityX=0*/
}
  }
  
  
 drawSprites();
    
}

  