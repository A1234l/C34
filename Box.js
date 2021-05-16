class Box{
    constructor(x,y){
        var options = {
            friction : 1,
            density : 0.04,
            restitution : 0.8
        }
        this.box = Bodies.rectangle(x,y,50,50,options);
        World.add(aiWorld,this.box);
        this.redC = random(0,255);
        this.greenC = random(0,255);
        this.blueC = random(0,255);
    }
    display(){
        // console.log(this.redC,this.greenC,this.blueC);
        push();
        rectMode(CENTER);
        fill(this.redC,this.greenC,this.blueC);
        noStroke();
        translate(this.box.position.x,this.box.position.y);
        rotate(this.box.angle);
        rect(0,0, 50, 50);
        pop();
    }
}