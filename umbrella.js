class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.r = 20;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.image=loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
        World.add(world,this.body);
    }

    display(){

        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,300,300);
        //circle(pos.x,pos.y,this.r);
        pop();
    }
}