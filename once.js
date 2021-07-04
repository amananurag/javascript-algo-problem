/*
A function that will only be called once. This is done using closure concept
*/


function once(){
    var hasBeenCalled = false;
       function inner(){
          
           if(!hasBeenCalled){
               hasBeenCalled = true;
               return "this is the first time function is called.";
           }else{
               return "cannot call this function again.";
           }
       }
       return inner;
}

var one = once()
console.log(one());
console.log(one());