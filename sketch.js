var survivalistIMG, zombieIMG, nightIMG, morningIMG
var survivalist
var zombieGroup
var Zombie1, Zombie2, Zombie3, Zombie4, Zombie5
var NightBackground
var bullet
var scream
var score = 0;
var ZombieConfused;


function preload(){
  nightIMG = loadImage('Pictures/Nighttimewarzone.jpg')
  survivalistIMG = loadImage('Pictures/Survivalist.png');
  zombieIMG = loadImage('Pictures/TransparentZombie.png');
  bulletIMG = loadImage('Pictures/bulletTransparent.png')
  morningIMG = loadImage('Pictures/warzone.jpg')
  
  }
  
function setup() {     
  var canvas = createCanvas(1419, 726);
  
  survivalist = createSprite(1064.25,354.75,100,100);
  survivalist.addImage(survivalistIMG,1064.25,354.75, 50, 50); 
  survivalist.velocityX = 0;
  survivalistIMG.resize(250, 0);
  survivalist = (mouseX, 0, mouseX, 100);
 
  
  Zombie1 = createSprite(450.75, 354.75, 100, 100); 
  Zombie1.addImage(zombieIMG,354.75, 354.75 );
  zombieIMG.resize(150, 0)
  Zombie1.velocityX = 7;

  Zombie2 = createSprite(350, 354.75, 100, 100); 
  Zombie2.addImage(zombieIMG,177, 354.75 );
  zombieIMG.resize(150, 0)
  Zombie2.velocityX = 7;

  Zombie3 = createSprite(250.75, 354.75, 100, 100); 
  Zombie3.addImage(zombieIMG,354.75, 354.75 );
  zombieIMG.resize(150, 0)
  Zombie3.velocityX = 7;

  Zombie4 = createSprite(150.75, 354.75, 100, 100); 
  Zombie4.addImage(zombieIMG,354.75, 354.75 );
  zombieIMG.resize(150, 0)
  Zombie4.velocityX = 7;

  Zombie5 = createSprite(50.75, 354.75, 100, 100); 
  Zombie5.addImage(zombieIMG,354.75, 354.75 );
  zombieIMG.resize(150, 0)
  Zombie5.velocityX = 7;


  bullet = createSprite(1064.25,354.75,100,100);
  bullet.addImage(bulletIMG,1064.25,354.75, 50, 50); 
  bullet.visible = false;
  bulletIMG.resize(50, 0)
  
  for (var i = 0; i < 726; i=i+20) {
    line(709.5,i,709.5,i+10);
  }

}

function draw() {
 background(nightIMG);

  if(bullet.isTouching(Zombie1)){
    Zombie1.destroy();
}
  if(bullet.isTouching(Zombie2)){
    Zombie2.destroy();
    
}
if(bullet.isTouching(Zombie3)){
  Zombie3.destroy();
  
}

if(bullet.isTouching(Zombie4)){
  Zombie4.destroy();
  
}

if(bullet.isTouching(Zombie5)){
  Zombie5.destroy();
}

/*if(Zombie5.isTouching(survivalist)){
  survivalist.destroy();
}

if(Zombie4.isTouching(survivalist)){
  survivalist.destroy();
}

if(Zombie3.isTouching(survivalist)){
  survivalist.destroy();
}

if(Zombie2.isTouching(survivalist)){
  survivalist.destroy();
}

if(Zombie1.isTouching(survivalist)){
  survivalist.destroy();
}*/



survivalist.y = World.mouseY;
survivalist.x = World.mouseX; 
  
  if(keyCode === 83){
   
    bullet.velocityX = -3;

    bullet.visible = true;

  }
  
  drawSprites();
 textFont('Langar')
 textSize(24)
 text("Can you defeat the Zombies?", 532.125, 100); 



}



 


