//extends creates a child class. so bird is child of base class 

class Bird extends BaseClass{
  constructor(x,y){
    //super transfers all properties of parent to child class  
    super(x,y,50,50);
    //special properties
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //function overridding = having same name function in child and parent class
    super.display();
  }
}