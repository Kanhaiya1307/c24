class dusbin{
    constructor(){
        this.dusbin = loadImage("dusbingreen.png")

    this.body = Bodies.rectangle(this.x, this.y)
    World.add(world, this.body);
    }
    display(){
        var paperpos = this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255); 
        image(this.dusbin,0,0)
        pop()
    }

}