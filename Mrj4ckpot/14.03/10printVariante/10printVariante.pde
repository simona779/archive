int w = 16;
int h = 16;
int index = 0;

int r = 225;
int g = 225;
int b = 225;
 
int conta = 15;
int a=0;



void setup() {
 size(640, 384);
 background(#222222);
 strokeWeight(5);
 smooth();
 stroke(r, g, b);
}



void draw() {
 int x1 = w*index;
 int x2 = x1 + w;
 int y1 = h*23;
 int y2 = h*24;

   
 
 if (random(2) < 1) {
 line(x2, y1, x1, y2);
 } else {
 line(x1, y1, x2, y2);
 }
 
 index++;
 
 if (index == width/w) {
    
 PImage p = get(0, h, width, h*23);
 background(#222222);
 set(0, 0, p);
 index = 0;
 
 if (conta == 15){
   a = int(random(2));
   conta = 0;
   }
   
   rainbow(a);
   stroke (r, g ,b);
   conta = conta +1;
 
 
 }
}

int rainbow (int a) {
  
  if (a==0) {
    if (r <= 0){
      r = r + 15;
      return r;
    }
    
    if  (r >= 15){
      r = r - 15;
      return r;
    }
  }
  
  
  if (a==1) {
    if (g <= 0){
      g = g + 15;
      return g;
    }
    
    if  (g >= 15){
      g = g - 15;
      return g;
    }
  }
  
  
  if (a==2) {
    if (b <= 0){
      b = b + 15;
      return b;
    }
    
    if  (b >= 15){
      b = b - 15;
      return b;
    }
  }
  

}
