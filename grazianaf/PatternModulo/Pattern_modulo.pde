void setup(){
size(600, 600);
background(0);
smooth();
noStroke();
rectMode(CENTER);
}

void draw(){
  frameRate(10);
for (int x = 0; x<=width; x+=50)  {
  for (int y=0; y<=height; y+=50)  { 
  //in base alla posizione del mouse sull'asse x o sull'asse y varia il colore delle circonferenze
    if (mouseX<=400){  
    fill( int(random(200,255)), int(random(255)), int(random(250)),155); //random color
  }
  else if (mouseY<=200){  
  fill(0, int(random(100,255)), int(random(100,255)),200); //random color
  }
  
  else{
    fill( int(random(200,255)), int(random(100,255)), int(random(100,255)),155); //random color
  }
  ellipse(x, y, frameCount%50, frameCount%50);
  }

  }
  
}
