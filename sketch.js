const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var backGround, monsterImg, superHeroImg;
var M1, M2, superHero, rope1, ground1, monster1;

var block1, block2, block3, block4, block5, block6;
var block7, block8, block9, block10, block11, block12, block13;
var block14, block15, block16, block17, block18, block19;
var block20, block21, block22, block23, block24, block25, block26;


function preload() {
  backGround = loadImage("images/GamingBackground.png");
}


function setup() {
  createCanvas(5000, 530);

  engine = Engine.create();
  world = engine.world;

  superHero = new Hero(200, 100, 200, 200);
  rope1 = new Rope(superHero.body, {x:200, y:70});
  ground1 = new Ground(400, 450, 1200, 15);

  block1 = new Block(500, 400, 50, 50);
  block2 = new Block(500, 380, 50, 50);
  block3 = new Block(500, 360, 50, 50);
  block4 = new Block(500, 340, 50, 50);
  block5 = new Block(500, 320, 50, 50);
  block6 = new Block(500, 300, 50, 50);

  block7 = new Block(580, 400, 50, 50);
  block8 = new Block(580, 380, 50, 50);
  block9 = new Block(580, 360, 50, 50);
  block10 = new Block(580, 340, 50, 50);
  block11 = new Block(580, 320, 50, 50);
  block12 = new Block(580, 300, 50, 50);
  block13 = new Block(580, 280, 50, 50);

  block14 = new Block(660, 400, 50, 50);
  block15 = new Block(660, 380, 50, 50);
  block16 = new Block(660, 360, 50, 50);
  block17 = new Block(660, 340, 50, 50);
  block18 = new Block(660, 320, 50, 50);
  block19 = new Block(660, 300, 50, 50);

  block20 = new Block(740, 400, 50, 50);
  block21 = new Block(740, 380, 50, 50);
  block22 = new Block(740, 360, 50, 50);
  block23 = new Block(740, 340, 50, 50);
  block24 = new Block(740, 320, 50, 50);
  block25 = new Block(740, 300, 50, 50);
  block26 = new Block(740, 280, 50, 50);

  monster1 = new Monster(900, 360, 200, 200);
}


function draw() {
  background(backGround);
  Engine.update(engine);

  superHero.display();
  rope1.display();
  ground1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();

  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  monster1.display();

  console.log(block1.body.width, block1.body.height);
}


function mouseDragged() {
  Matter.Body.setPosition(superHero.body, {x:mouseX, y:mouseY});
}