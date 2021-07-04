/*
Singly linked list consists of Node with value and a pointer to next location.
Insertion and deletion at a particular index using linkedlist is faster as compared to array 
with time complexity.
*/
class Node{
    constructor(val){
       this.val = val;
       this.next = null;
    }
  }
  
  
  class SinglyLinkedList { 
     constructor(){
          this.head = null;
          this.tail = null;
          this.length = 0;
     }
     push(val){
         var node = new Node(val);
         if(!this.head){
             this.head = node;
             this.tail = node;
         }else{
             this.tail.next = node;
             this.tail = node;
         }
         this.length++;
         return this;
     }
     pop(){
        if(!this.length) return undefined;
         var current = this.head;
         var newTail = current;
           while(current.next){
               newTail = current;
               current = current.next;
           } 
           this.tail = newTail;
           this.tail.next = null;
           this.length--;
           if(this.length ===0){
               this.head = null;
               this.tail = null;
           }
           return current;
     }
        shift(){
          if(!this.head) return undefined;
          var current = this.head;
          this.head = current.next;
          if(this.length ===0){
            this.head = null;
            this.tail = null;
          }
          this.length--;
          return current;
        }
        unshift(val){
          var node = new Node(val);
           if(!this.head){
             this.head = node;
             this.tail = node;
           }else{
             var current = this.head;
             this.head = node;
             this.head.next = current;
           }
           this.length++;
           return this;
        }
        get(index){
              if(index < 0 || index >= this.length){
                    return null
              }else if(index === 0){
                    return this.head;
              }else{
                    var counter = 0;
                    var current = this.head;
                    while(counter !== index){
                          current = current.next;
                          counter++;
                    }
                    return current;
              }  
        }
        set(index, value){
              if(!this.length && index !==0){
                    return false;
              }else{
              var foundNode = this.get(index); 
              foundNode.val = value;
               return true; 
              
        }
        }
        insert(index, value){
              var node = new Node(value);
              if(index < 0 && index >= this.length){
                    return false;
              }else if(index === this.length-1){
                    this.push(node);
                     this.length++;
                     return this;
              }else if(index === 0){
                    this.unshift(node);
                    this.length++;
                    return this;
              }else{
                    var previous = this.get(index-1);
                    var nextEle = this.get(index+1);
                    previous.next = node;
                    if(!nextEle){
                           node.next = nextEle;
                    }
                   
                    this.length++;
                    return this;
              }
        }
        remove(index){
              if(index < 0 && index >= this.length){
                    return false;
              }else if(index === this.length-1){
                    this.pop();
                     this.length--;
                     return this;
              }else if(index === 0){
                    this.shift();
                    this.length--;
                    return this;
              }else{
                    var previous = this.get(index-1);
                    var nextEle = this.get(index+1);
                    previous.next = nextEle;
                    this.length--;
                    return this;
              }
        }
  }
  
  var a = new SinglyLinkedList();
  a.push('hello');
  
  
  console.log(a.insert(1,"here"));