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
    show(i){
        if(this.parent!=null){
            push();
            // let root_branch=createVector(width/2,height);
            // let d=p5.Vector.dist(this.pos,root_branch);
            // let b=map(d,0,height*sqrt(2),3,0);
            let b= map(i,0,tree.branches.length,6,1);
            stroke(255)
            strokeWeight(b);
            line(this.pos.x,this.pos.y,this.parent.pos.x,this.parent.pos.y);
            pop();
        }
    }
}