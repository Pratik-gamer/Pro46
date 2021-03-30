const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var player1;
var bg;

function preload(){
player1=loadImage("images/Player/Boy.png");
bg=loadImage("images/Background.jpg");
}

function setup() {

  createCanvas(1300,900);
  engine=Engine.create();
  world = engine.world
}

function draw() {

  background(bg);  
  Engine.update(engine);
  image(player1, 400, 640, 200, 200);

  //drawSprites();
}

function keyPressed(){
    if(keyCode===37){
    player1.x-=10;
  }
}

//function mouseDragged(){
 // Matter.Body.setPosition(boy.body, {x:mouseX, y:mouseY})

//}