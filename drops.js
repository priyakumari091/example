class Drops {
    constructor(x,y,r){

        var options = {
            isStatic:false,
            restitution:0.1,
            friction:0.001
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        push()
        strokeWeight(4);
        fill(19,21,93);
        circle(pos.x,pos.y,this.r);
        pop()
    }

    reset(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
}