const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var umbrellaPerson;
var maxDrops = 100;
var drops = [];
var thunder1, thunder2, thunder3, thunder4, thunder;
var thunderFrameC;

function preload() {
  thunder1 = loadImage("images/thunderbolt/1.png");
  thunder2 = loadImage("images/thunderbolt/2.png");
  thunder3 = loadImage("images/thunderbolt/3.png");
  thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup() {
  createCanvas(400,600);

  engine = Engine.create();
  world = engine.world;
  
  if(frameCount % 150) {
    for(var i=0; i<maxDrops; i++) {
      drops.push(new Drop(random(0,400), random(0,400)));
    }
  }

  umbrellaPerson = new Umbrella(45,320,20);

  Engine.run(engine);
}

function draw() {
  background(0,0,0);  
  
  for(var i=0; i<maxDrops; i++) {
    drops[i].display();
    drops[i].update();
  }

  umbrellaPerson.display();

  var rand = Math.round(random(1,4));
  if (frameCount % 50 === 0) {
    thunderFrameC = frameCount;
    thunder = createSprite(200, 100, 100, 100);
    switch(rand){
        case 1: thunder.addImage("thunder1", thunder1);
        break;
        case 2: thunder.addImage("thunder2", thunder2);
        break;
        case 3: thunder.addImage("thunder3", thunder3);
        break;
        case 4: thunder.addImage("thunder4", thunder4);
        break;
        default: break;
    }
  } 
  if(thunderFrameC+10 === frameCount) {
    thunder.destroy();
  }
  drawSprites(); 
}