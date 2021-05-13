const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

function preload(){
   polygonimg = loadImage("polygon.png");
}

function setup(){
   createCanvas(1400,600);
   engine = Engine.create();
   world = engine.world;
   ground1 = new Ground(390,400,250,20);
   ground2 = new Ground(680,230,250,20);
   block1 = new Box(330,235,30,40);
   block2 = new Box(360,235,30,40);
   block3 = new Box(390,235,30,40);
   block4 = new Box(420,235,30,40);
   block5 = new Box(450,235,30,40);
   block6 = new Box(360,195,30,40);
   block7 = new Box(390,195,30,40);
   block8 = new Box(420,195,30,40);
   block9 = new Box(390,155,30,40);
   box1 = new Box(620,100,30,40);
   box2 = new Box(650,100,30,40);
   box3 = new Box(680,100,30,40);
   box4 = new Box(710,100,30,40);
   box5 = new Box(740,100,30,40);
   box6 = new Box(650,60,30,40);
   box7 = new Box(680,60,30,40);
   box8 = new Box(710,60,30,40);
   box9 = new Box(680,20,30,40);
   polygon = Bodies.circle(50,350,20);
   World.add(world,polygon);
   slingshot1 = new Slingshot(this.polygon,{x:100,y:350});
}

function draw(){
   background("black");
   Engine.update(engine);
   ground1.display();
   ground2.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   imageMode(CENTER);
   image(polygonimg,polygon.position.x,polygon.position.y,40,40);
   slingshot1.display();
}

function mouseDragged(){
   Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot1.fly()
}