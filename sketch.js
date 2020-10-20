
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, ground
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}



function setup() {
  createCanvas(400, 400);  

  monkey = createSprite(40,300,30,30);
  monkey.addAnimation("Run", monkey_running);
  monkey.scale = 0.11;
  
  ground = createSprite(200,350,400,20);
  ground.x = ground.width /2;
  
  score = 0;
}


function draw() {
  background(255)
 
  score = score + Math.round(getFrameRate()/60); 
  text("Score: "+ score, 200,50);  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }

  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  
  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;
    }
  
  spawnFoods();
  spawnObstacles();
  
  drawSprites();
  
}

function spawnFoods(){
 if (frameCount % 80 === 0){
   var food = createSprite(600,180,10,40);
   food.y = Math.round(random(120,180));
   food.velocityX = -8
   food.addImage(bananaImage);   
    //assign scale and lifetime to the obstacle           
    food.scale = 0.1;
    food.lifetime = 300;
   
   //add each obstacle to the group
    FoodGroup.add(food);
 }
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacles = createSprite(600,325,10,40);
   obstacles.velocityX = -8
   obstacles.addImage(obstaceImage);   
    //assign scale and lifetime to the obstacle           
    obstacles.scale = 0.1;
    obstacles.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacles);
 }
}





