const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

   hammer = new Hammer(100,100)

   stone = new Stone(800,320,100,100);

   rubber = new Rubber(700,340,70)

   sand1 = new Sand(505,450,10)
   sand2 = new Sand(505,460,10)
   sand3 = new Sand(505,470,10)
   sand4 = new Sand(505,480,10)
   sand5 = new Sand(505,490,10)
   sand6 = new Sand(505,500,10)
   sand7 = new Sand(505,510,10)
   sand8 = new Sand(505,520,10)

   iron = new Iron(400,320,90,50)

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    
   
    hammer.display();

    stone.display();

    rubber.display();

    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();

    iron.display()
    
    ground.display();

}