class Node {
    constructor(value){
        this.data = value;
        this.next = null;

    }
}
class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value){
        var node = new Node(value);
        if(!this.first){
            this.first = node;
            this.last = node;
           
        }else{
            var current = this.first;
            this.first = node;
            this.first.next = current;
            
        }
        this.size++;
        return this;
    }
    pop(){
        if(!this.first) return undefined;
        var current = this.first;
        this.first = current.next;
        this.size--;
        if(this.size ===0){
            this.first = null;
            this.last = null;
        }
        return current;
    }
}
var stack = new Stack();
stack.push('here is function in global');
stack.push('function added on global');
stack.pop();
stack.pop();
stack.push('hello world');
console.log(stack);
