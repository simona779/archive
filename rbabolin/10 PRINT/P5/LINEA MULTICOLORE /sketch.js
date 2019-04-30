let r = 25;
let p = 100;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

  strokeWeight(5);
  stroke(random(255), random(255), random(255));
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 500, p));
  line(r, r, 200, 200);
  p += 0.2;

}