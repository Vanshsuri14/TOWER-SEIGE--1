const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  ground = new Ground(400,300,250,10);
  ground1 = new Ground(400,400,800,10);

  // block1 = new Block(120,235,30,40);
  // block2 = new Block(150,235,30,40);
  // block3 = new Block(180,235,30,40);
  // block4 = new Block(210,235,30,40);
  // block5 = new Block(240,235,30,40);
  // block6 = new Block(270,235,30,40);
  // block7 = new Block(480,2,30,40);
  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);
  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block8 = new Block(420,195,30,40);
  block9 = new Block(390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new SlingShot(this.polygon,{x:100,y:200});



  
}

function draw() {
  background(255); 
  Engine.update(engine);
  block1.display(); 
  block2.display(); 
  block3.display(); 
  block4.display(); 
  block5.display(); 
  block6.display(); 
  block7.display(); 
  block8.display(); 
  block9.display(); 
  // block10.display(); 
  // block11.display(); 
  // block12.display(); 
  // block13.display(); 
  // block14.display(); 
  // block15.display(); 
  // block16.display(); 

  slingShot.display();
  ellipseMode(RADIUS);

  ellipse(polygon.position.x,polygon.position.y,10,10);
  
  ground.display();
  ground1.display();
  
  drawSprites();
}

function mouseDragged(){
    
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});

}

function mouseReleased(){
slingShot.fly();

}

