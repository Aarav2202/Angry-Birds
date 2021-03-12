class Log{
    constructor(x,y,h,angle){
        var option={
            restitution:0.7,
            friction:1

        }
        
        this.body=Bodies.rectangle(x,y,20,h,option)
        this.w=20
        this.h=h
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("brown")
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }
}