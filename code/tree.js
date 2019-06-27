class Tree{
    constructor(){
        this.leaves=[]
        this.branches=[];
        this.current;
    }


    // create the leaves ie nodes 
    init(n){
        for(let i=0;i<n;i++){
            this.leaves[i]=new Leaf();
        }

        // create root branch segment
        let root_pos=createVector(width/2, height);
        let root_dir=createVector(0,-1);
        let root=new Branch(null,root_pos,root_dir);
        this.current=root;
        this.branches.push(this.current)
    }

    make_tree(){
        let found_leaf=false;
        while(!found_leaf){
            for(let i=0;i<this.leaves.length;i++){
                let d=this.current.pos.dist(this.leaves[i].pos)
                if(d<max){
                    found_leaf=true;
                }
            }
            if(!found_leaf){    
                this.current=this.current.next();
                this.branches.push(this.current);
            }
        }
    }



    grow(){
        // go through all the leaves in the array and find the closest
        //  branch to each leaf

        for (var i = 0; i < this.leaves.length; i++) {
            var leaf = this.leaves[i];
            var closestBranch = null;
            var record = max;
            for (var j = 0; j < this.branches.length; j++) {
              var branch = this.branches[j];
              var d = p5.Vector.dist(leaf.pos, branch.pos);
              if (d < min) {
                leaf.reached = true;
                closestBranch = null;
                break;
              } else if (d < record) {
                closestBranch = branch;
                record = d;
              }
            }
            //if a closest branch exists then turn the branch to the closest leaf
            if (closestBranch != null) {
              var newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
              newDir.normalize();
              closestBranch.dir.add(newDir);
              closestBranch.count++;
            }
          }


          // if leaf has been reached , delete it from the index; 
          for (var i = this.leaves.length - 1; i >= 0; i--) {
            if (this.leaves[i].reached) {
              this.leaves.splice(i, 1);
            }
          }
          
          // if the count of the branch is greater than 0 then create
          // a new branch attached to it in the direction of the closest branch
          for (var i = this.branches.length - 1; i >= 0; i--) {
            var branch = this.branches[i];
            if (branch.count > 0) {
              let rand_vec=p5.Vector.random2D();
              rand_vec.setMag(0.2)
              branch.dir.add(rand_vec)
              branch.dir.div(branch.count + 2);              
              this.branches.push(branch.next());
              branch.reset();
            }
          }
    }

        
    show(){
        for(let i=0;i<this.leaves.length;i++){
            this.leaves[i].show();
        }

        for(let i=0;i<this.branches.length;i++){
            this.branches[i].show(i);
        }
    }
}