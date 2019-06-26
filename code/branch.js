class Branch{
    constructor(parent,pos,dir){
        this.parent=parent;
        this.pos=pos;
        this.dir=dir;
        this.Origin=dir;
        this.long=5;
        this.count=0;
    }

    reset(){
        this.dir=this.Origin;
        this.count=0;
    }

    next(){
        var nextDir = p5.Vector.mult(this.dir, this.long);
        var nextPos = p5.Vector.add(this.pos, nextDir);
        var nextBranch = new Branch(this, nextPos, this.dir.copy());
        return nextBranch;
      }
    show(){
        if(this.parent!=null){
            stroke(255);
            line(this.pos.x,this.pos.y,this.parent.pos.x,this.parent.pos.y);
        }
    }
}