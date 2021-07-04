/*
A function that will only be called once. This is done using closure concept
*/


function once(){
    var hasBeenCalled = false;
       function inner(){
           hasBeenCalled = true;
           if(hasBeenCalled){
               return "Cannot recall this function again";
           }else{
               return "this is the first time function is called."
           }
       }
       return inner;
}

var one = once()
console.log(one());
console.log(one());