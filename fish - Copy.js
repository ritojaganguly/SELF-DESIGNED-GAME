class Fish{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height)//{isStatic:true});
        this.width=width;
        this.height=height;
        this.image = loadImage("fish.png");
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}