
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var survivalTime = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  
}


function draw() {
  background(255);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  rock();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTimme = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100, 50);
  
  drawSprites();

  
}


function food(){
  if(frameCount % 80 === 0) {
    banana = createSprite(600,160,40,40);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = ground.velocityX;
    banana.lifetime = 200;
    bananaGroup.add(banana);
    
  }
}

function rock(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,315,80,80);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = ground.velocityX;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}











