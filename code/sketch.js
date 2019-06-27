let tree;
let n=600;
let min=5;
let max=200;
let start_button;
let val;

function setup(){
    createCanvas(600,600);
    start_button=createButton("CLICK TO START");
    start_button.mousePressed(run);
    tree=new Tree();
    background(0);
    tree.init(n);
}


function draw(){
    for(let i=0;i<tree.leaves.length;i++){
        tree.leaves[i].show();
    }
    if(val){
        background(0);
        tree.grow();
        tree.show();
    }
}

function run(){
    if(!val){

        val=1;
        tree.make_tree();
    }
}

// function mouseDragged(){
//     let a=createVector(mouseX, mouseY)    
//     tree.leaves.push(new Leaf(a));

    
// }