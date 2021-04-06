class Paper {
    constructor(x,y){

    var options = {

    'isStatic' : false,
    'restitution' : 0.3,
    'friction' : 0.2,
    'density' : 1.2,
    
    }
    this.body = Bodies.circle(x,y,17,options);
    this.width = 50;
    this.height = 50;
    this.image = loadImage("paper.png");
    World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}