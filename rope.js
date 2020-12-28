class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            length: 250
        }
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        stroke("white");
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x + this.offsetX,this.chain.bodyB.position.y + this.offsetY);
    }
}