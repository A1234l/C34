class Chain{
    constructor(p1,b2){
        var options= {
            pointA : p1,
            bodyB : b2,
            stiffness : 0.5,
            length : 400
        }
        this.chain = Constraint.create(options);
        World.add(aiWorld,this.chain);
    }
    display(){
        var posA = this.chain.pointA;
        var posB = this.chain.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);
    }
}