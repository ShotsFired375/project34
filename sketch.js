const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var backGround, M1Img, M2Img, superHeroImg;
var M1, M2, superHero;


function preload() {
  backGround = loadImage("images/GamingBackground.png");

  M1Img = loadImage("images/Monster-01.png");
  M2Img = loadImage("images/Monster-02.png");

  superHeroImg = loadImage("images/Superhero-01.png");
}


function setup() {
  createCanvas(900, 500);

  engine = Engine.create();
  world = engine.world;

  superHero = new Hero(200, 100, 5, 5);

}


function draw() {
  background(backGround);
  Engine.update(engine);

  superHero.display();
}


function mouseDragged() {
  Matter.Body.setPosition(superHero.body, {x:mouseX, y:mouseY});
}