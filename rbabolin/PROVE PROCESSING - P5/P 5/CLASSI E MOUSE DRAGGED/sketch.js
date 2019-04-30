let bubbles = [];


function setup() {
  createCanvas(600, 600);
}
function mouseDragged(){
  let r = random(10, 20);
  //color = (random(0,255), 255, 255);
 	let b = new Bubble(mouseX, mouseY,r);
  bubbles.push(b);
 
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    //colorMode(HSB);
    let colore = random(255);
    stroke(colore, 255, 255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}