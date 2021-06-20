const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubberBall;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);

    rubberBall = new Rubber(600, 300, 70);
    stone = new Stone(700, 300, 60, 60);
    iron = new Iron(800, 300, 100, 50);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubberBall.display();
    stone.display();
    iron.display();

    
 
}