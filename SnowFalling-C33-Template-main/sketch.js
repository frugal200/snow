const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world
function preload(){
  bgimg = loadImage("snow2.jpg");
}


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  snow1=new Snow(50,20,40,40);
}

function draw() {
  background(bgimg);  
  snow1.display();
  drawSprites();
}