class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = value;
        this.size = 0;
    }
    enqueue(value){
        var node = new Node(value);
        if(!this.first){
            this.first = node;
            this.last = node;
        }else{
            var current = this.first;
            var newLast = current;
            while(current.next){
                current = current.next;
             }
             newLast = current;
             newLast.next = node;
             this.last = node;
        }
          this.size++;
          return this;

    }
       dequeue(){
             if(!this.first) return undefined;
             var current = this.first;
             this.first = current.next;
             this.size--;
             if(this.size === 0){
                 this.first = null;
                 this.last = null;
             }
             return current;
       }
}
var queue = new Queue();
queue.enqueue('hello');
queue.enqueue('world');
queue.enqueue('queue is done');
queue.dequeue();
queue.dequeue();
console.log(queue);