class Leaf{
    constructor(a){
        // this.pos=createVector(random(width), random(height-200));
        this.pos=a;
        this.reached=false;
    }

    show(){
        stroke(255);
        ellipse(this.pos.x,this.pos.y,4,4);
    }
}