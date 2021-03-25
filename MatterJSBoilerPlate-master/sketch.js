
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1,rope2,rope3,rope4,rope5;
var stand;
var ball1,ball2,ball3,ball4,ball5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stand = new Stand(320,190,400,20);

	ball = new Ball(200,200,30,30);
    rope = new Rope(ball.body,{x : 200 , y : 200});

	ball1 = new Ball(263,200,30,30);
    rope1 = new Rope(ball1.body,{x : 260 , y : 200});

	ball2 = new Ball(323,200,30,30);
    rope2 = new Rope(ball2.body,{x : 320 , y : 200});

	ball3 = new Ball(383,200,30,30);
    rope3 = new Rope(ball3.body,{x : 380 , y : 200});

	ball4 = new Ball(443,200,30,30);
    rope4 = new Rope(ball4.body,{x : 440 , y : 200});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGreen");
  
 stand.display();
 ball.display();
 rope.display();

 ball1.display();
 rope1.display();

 ball2.display();
 rope2.display();

 ball3.display();
 rope3.display();

 ball4.display();
 rope4.display();


}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball4.body, ball.body.position , {x:1300, y:-1300});
	}
	

}

