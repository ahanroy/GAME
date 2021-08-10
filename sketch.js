var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
 var score=0

function preload(){
  towerImg = loadImage("tower.png");
  doorImg=loadImage("door.png")
  climberImg=loadImage("climber.png")
  ghostImg=loadImage("ghost-standing.png")
}

function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup=new Group()
  climbersGroup=new Group()

 ghost=createSprite(200,200,50,50)
 ghost.addImage(ghostImg)
 ghost.scale=0.3
 
 

}

function draw(){
  background(0);
   if(gameState==="play"){
    
    if(tower.y > 400){
      tower.y = 300
    }

    if(keyDown("left")){
     ghost.x=ghost.x-3
    }
    if(keyDown("right")){
    ghost.x=ghost.x+3
    }
    if(keyDown("space")){
    ghost.velocityY=-5
    score=score+1
    }
    ghost.velocityY=ghost.velocityY+0.8

    if(climbersGroup.isTouching(ghost)||ghost.y>600){
    gameState="end"
    ghost.destroy()
    }


    spawndoors()
    
    
    drawSprites();
  }
   if(gameState==="end"){
    textSize(30)
    fill ("yellow")
    text("GAME OVER" ,230,250) 
   }
   textSize(30)
   fill("blue")
   text("SCORE:"+score,370,50)
}
function spawndoors(){
  if(frameCount%240===0){
    door=createSprite(200,-50)
    door.velocityY=1
    door.addImage(doorImg)
    door.x=Math.round(random(120,400))
    door.lifetime=800
    doorsGroup.add(door)
    
    climber=createSprite(200,10)
    climber.velocityY=1
    climber.addImage(climberImg)
    climber.x=door.x
    climber.lifetime=800
    climbersGroup.add(climber)
  }
}  
 



