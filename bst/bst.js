class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    find(value){
        var found = false;
        var current = this.root;
        if(!this.root) return undefined;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right
            }else{
                return true;
            }
        }
        return false;
    }
    insert(value){
        var node = new Node(value);
        if(!this.root){
            this.root = node;
            return this;
        }else{
            var current = this.root;
            while(true){
                if(value == current.value) return undefined;
                else if(value < current.value){
                    if(current.left == null){
                        current.left= node;
                    }else{
                        current = current.left;
                    }
                }else{
                    if(value > current.value){
                        if(current.right == null){
                            current.right = node;
                        }else{
                            current = current.right;
                        }
                    }
                }
            }
        }
    }
}
       //        10
        // 7               15
        //           14
var bst = new BST();
bst.insert(10);
bst.insert(7);
bst.insert(15);
bst.insert(14);
bst.insert(14);
console.log(bst.find(14))