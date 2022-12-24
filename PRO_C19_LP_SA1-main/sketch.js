var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("hokage.jpg");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  narutoImage=loadImage("NARUTOS.PNG")
  kuramaImage=loadImage("KURAMAS-removebg-preview.png")
  GOimg=loadImage("GO.jpg")

}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  kuramaGroup=new Group()
  naruto=createSprite(200,200,50,50)
  naruto.addImage(narutoImage)
  naruto.addImage(GOimg)
  naruto.scale=0.3
  naruto.debug=true
naruto.setCollider("circle",0,0,20)
}

function draw() {
  background(200);
  
  if(tower.y > 300){
      tower.y = 200
    }
    if(keyDown("left")){
      naruto.x-=3
    }
    if(keyDown("right")){
      naruto.x+=3
    }
    if(keyDown("space")){
      naruto.velocityY-=5
    }
    naruto.velocityY+=1
    if(kuramaGroup.isTouching(naruto)){
      naruto.velocity=0
    }
    createKuramas()
    drawSprites()
    if (naruto.y>600){
      naruto.y=0
      text("GAME OVER",300,300)
      naruto.changeImage(GOimg)
    }
}


function createKuramas(){
  if(frameCount%200===0){
    var kurama=createSprite(200,-50)
    kurama.addImage(kuramaImage)
    kurama.x=Math.round(random(100,400))
    kurama.velocityY=1
    kurama.scale=0.25
kurama.debug=true
  kuramaGroup.add(kurama)
  }

}
