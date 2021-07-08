var bg,start,angel,devil;
var angel1,devilp,anglePower,devilPower;
var gameState="play"
function preload(){
  bg = loadImage("bg2.jpg");
  start = loadImage("start.png");
  angelImage = loadImage("a.png");
  devilImage = loadImage("devil.png");
  devilPower = loadImage("blueFireball.png");
  anglePower = loadImage("greenFireball.png");
}
function setup(){
  createCanvas(displayWidth,displayHeight);
  angel = createSprite(1500,550,50,50)
  angel.addImage(angelImage);
  angel.scale=0.8;
  angel1 = createSprite(1900,550,1,1)
  angel.debug=false;
  angel.setCollider("rectangle",0,0,400,100);
  devilGroup= new Group()
}






function draw(){
  background(bg);
 
  if(gameState==="play"){
   
   // angleP.visible=false
  
 
 
  
  if(keyDown(LEFT_ARROW)){
    angel.x-=2
  }
  if(keyDown(RIGHT_ARROW)){
    angel.x+=2
  }
  if(keyDown(UP_ARROW)){
    angel.y-=2
  }
  if(keyDown(DOWN_ARROW)){
    angel.y+=2
  }
  
  if(keyDown("space")){
    angel1.velocityX=-10
    angelP()
    
  }
}
enemy()

  //devilp.y=devil.y
  drawSprites()

if(devilGroup.isTouching(angel1)){
  devilGroup[0].destroy()
}


}
 function enemy(){
   if(frameCount%100===0){
   ene= createSprite(10,Math.round(random(100,500)),10,10);
   ene.addImage(devilImage);
   ene.scale=0.2;
ene.velocityX=2
devilGroup.add(ene)
 }
 }

 function angelP(){
  if(frameCount%5===0){
  angel1= createSprite(angel.x,angel.y,10,10);
  angel1.addImage(anglePower);
  angel1.scale=0.2;
angel1.velocityX=2
}
}
