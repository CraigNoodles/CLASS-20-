var movingRect, fixedRect;

function setup(){
  createCanvas(1200,800);

  movingRect = createSprite(100,100,50,80);
  movingRect.shapeColor = "orange";
  movingRect.debug = true;

  fixedRect = createSprite(700,400,90,40);
  fixedRect.shapeColor = "orange";
  fixedRect.debug = true;
}

function draw(){
  background(0);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){ 
    movingRect.shapeColor = "violet";
    fixedRect.shapeColor = "violet";
  }

  else{
    movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "orange";
  }

  drawSprites();
}