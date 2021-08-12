var box;



function setup() {
  createCanvas(400,400);
  background(7);
box = createSprite(200,200,10,10);
}


 

function draw() {
  
  if (keyIsDown(UP_ARROW)){
    background("YELLOW");
  }

  if (keyIsDown(DOWN_ARROW)){
    background("LAVENDER");
  }

  if (keyIsDown(LEFT_ARROW)){
    background("PINK");
  }

  if (keyIsDown(RIGHT_ARROW)){
    background("SKYBLUE");
  }

drawsprites();
}




