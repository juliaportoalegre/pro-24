const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

var stone, iron, rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);

    stone = new Stone(50, 250, 100, 100);
    rubber = new Rubber(100, 60, 40);
    iron = new Iron(150, 150);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
  stone.display();
 rubber.display();
 iron.display();
  
   
}