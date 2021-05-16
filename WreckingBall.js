class WreckingBall{
    constructor(){
        var options = {
            density : 3,
            frictionAir : 0.005
        }
        this.ball = Bodies.circle(160,460,50,options);
        World.add(aiWorld,this.ball);
    }
    display(){
        ellipseMode(CENTER);
        fill('gray');
        push();
        noStroke();
        ellipse(this.ball.position.x,this.ball.position.y,100,100);
        pop();
        // console.log(this.ball);
    }
}