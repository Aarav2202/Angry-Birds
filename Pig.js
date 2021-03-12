class Pig{
    constructor(x,y){
        var option={
            restitution:0.7
        }
        
        this.body=Bodies.rectangle(x,y,60,60,option)
        this.w=60
        this.h=60
        World.add(world,this.body)
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("green")
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }
}