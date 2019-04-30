let x = 0;
let y = 0;
let spacing = 30;
let radius = 20;


function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
}

function draw() {
  //stroke(255);
  
  if(random(2) < 0.5) {
    stroke(255,0,0)
    line(x, y, x+spacing, y);
  }
  
  else if(random(2) > 0.5 && random(2) < 1){
    stroke(0,255,0)
    line(x, y + spacing, x+spacing, y);
  }
  
  else if(random(2) > 1 && random(2) <= 1.5) {
    stroke(0,0,255)
    line(x, y, x+spacing, y+spacing);
  }
  
  else {
    noStroke();
    fill(random(255),random(255), random(255));
    ellipse(x, y,random(radius));
  }
  
  if(x > width) {
    x = 0 - spacing;
    y = y + spacing;
  }

  x = x + spacing;
 
  
}