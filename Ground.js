class Ground{
    constructor(){
        var options={
            isStatic : true
        }
        this.ground = Bodies.rectangle(400,690,800,20,options);
        World.add(aiWorld, this.ground);
    }
    display(){
        fill('red');
        push();
        noStroke();
        rect(0,680,800,20);
        pop();
    }
}