class Food{
    constructor(x,y){
        var options = {
            friction : 0.7, 
            isStatic : false
        }
        this.food = Bodies.rectangle(x,y,10,20,options);
        this.x = x;
        this.y = y;
        this.image = loadImage("food.png")
        World.add(world, this.food);
    }
    update(){
        if(this.food.y > height){
            Matter.Body.setPosition(this.food, {x:random(0,400), y:random(0,400)})
        }
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.food.position.x,this.food.position.y,10,10);
    }
}