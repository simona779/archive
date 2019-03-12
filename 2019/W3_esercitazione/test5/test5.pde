/* @author Petrangolini Paolo 
 * @name Revolving squares 
 * @description simple example of a object 
*/


ArrayList<quadrati> q=new ArrayList<quadrati>();

void setup(){
  size(500,500);
  for(int i=0;i<100;i++){
  q.add(new quadrati());
  }

}

void draw(){
   background(255);
    // For all my squares turn and draw it 
   
   for(int i=0;i<q.size();i++){
    q.get(i).update();
    q.get(i).dysplay();
  
  }

  
}