class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.4,
            friction:0,
            density:10.2

        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}