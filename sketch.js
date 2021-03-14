const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var rain =[];
var maxDrops = 100;

var umbrellaImage,boy,thunderImg1,thunderImg2,thunderImg3,thunderImg4;

function preload(){
    
    //umbrellaImage = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    thunderImg1 = loadImage("1.png");
    thunderImg2 = loadImage("2.png");
    thunderImg3 = loadImage("3.png");
    thunderImg4 = loadImage("4.png");
}

function setup(){
   var canvas = createCanvas(500,900);

   engine = Engine.create();
   world = engine.world;

   for(var i=0;i<maxDrops;i++){

    rain.push(new Drops(random(0,500),random(0,900),10));
    rain[i].display();
    rain[i].reset();
   }


  boy = new Umbrella(200,600);
  //boy.addAnimation("umbrella",umbrellaImage);

    
}

function draw(){
    background("black");
    Engine.update(engine);

    for(var i=0;i<maxDrops;i++){
        rain[i].display();
        rain[i].reset();
       }

       boy.display();
       spawnThunder();
    drawSprites();
}   


function spawnThunder(){
    rand = Math.round(random(1,4))
    if(frameCount%80===0){
        thunder = createSprite(random(10,570),random(10,30))
        switch(rand){
            case 1: thunder.addImage(thunderImg1);
            break;
            case 2: thunder.addImage(thunderImg2);
            break;
            case 3: thunder.addImage(thunderImg3);
            break;
            case 4: thunder.addImage(thunderImg4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6);
        thunder.lifetime = 50;
    }
}
