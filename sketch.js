const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var monster;
var food = [];
var maxFood = 100;
var score  = 0;

function preload() {
//preload the images here
bg = loadImage("bg.png");
mon1= loadImage("monster1.png");
mon2= loadImage("monster2.png");
mon3= loadImage("monster3.png");
mon4= loadImage("monster4.png");
fishImg = loadImage("fish.png");
foodImg = loadImage("food.png")

}

function setup() {
  engine = Engine.create();
  world = engine.world;


  createCanvas(1360, 657);
  // create sprites here
  fish = createSprite(150,200,180,150);
  fish.addImage(fishImg);
  fish.scale = 0.5;
  /*for(var i=0; i<maxFood; i++){
    food.push(new Food(random(0,400), random(0,400)));
  }*/

  monsterGroup = new Group();
}

function draw() {
  background(bg);
  textSize(25);
  fill("black");
  text("Score: " + score, 30,40)
  if(frameCount % 20 == 0){
    monster = createSprite(Math.round(random(300,1160)),Math.round(random(30,627)),20,200)
    rand = Math.round(random(1,4))
    switch(rand){
       case 1 : monster.addImage(mon1);
       break 
       case 2 : monster.addImage(mon2);
       break 
       case 3 : monster.addImage(mon3);
       break 
       case 4 : monster.addImage(mon4);
       break 
    }
    monster.scale = 0.4;
    monster.lifetime = 20;
    monster.velocityX = 0;
    monster.velocityY = -2;
    monsterGroup.add(monster);
    createEdgeSprites();
    //monsterGroup.bounceOff(edges);
    
  }

  if(fish.isTouching(monsterGroup)){
    fish.setVelocity(0,0);
  }
  if(frameCount % 40 == 0){
    food = createSprite(Math.round(random(300,1160)),Math.round(random(30,627)),20,200)
    food.addImage(foodImg)
    food.scale = 0.4;
    food.lifetime = 100;
    //monsterGroup.add(monster);
    
  }
  if(fish.isTouching(food)){
    score = score + 10 ;
  }
 drawSprites();
}
  
function keyPressed(){
  if (keyCode == LEFT_ARROW){
    fish.setVelocity(-6,0);
  }
  if (keyCode == RIGHT_ARROW){
    fish.setVelocity(6,0)
  }
  if (keyCode == UP_ARROW){
    fish.setVelocity(0,-6)
  }
  if (keyCode == DOWN_ARROW){
    fish.setVelocity(0,6)
  }
}
