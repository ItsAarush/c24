function setup() {
  createCanvas(800,400);
 var package;
 var line1;

}


function draw() {
  background(0);  
  package=createSprite(600,200,50,50);
  line1=createSprite(610,430,100,100);
  
  if (keyDown("space")) {
    package.velocityX=0
    package.velocityY=4
  }

  line1.display();
  package.display();
  drawSprites();
}