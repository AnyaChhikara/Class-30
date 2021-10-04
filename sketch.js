const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var slingShot;
var fruit;
function preload(){
  backgroundImg = loadImage("background.png");
 fruit=loadImage("melon.png");
 basket=loadImage("basket.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)
  ground = new Ground();

 ball = Bodies.circle(100,200,20);
 World.add(world,ball);

 slingShot = new Slingshot(this.ball,{x:100,y:100});

  

}
function draw() {
  background(backgroundImg);

  imageMode(CENTER);
  image(fruit,ball.position.x,ball.position.y,40,40);
  image(basket,450,320);

  slingShot.display();
  ground.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();

}
