/*
A setter and getter function 
*/

function modulePattern(){
    var result = {};
    function inner(key, value){
         if(value !== undefined){
           result[key]= value;
         }else{
             return result[key];
         }
    }
    return inner;
}

var set = modulePattern();
var setValue = set('city', "paris");
var getValue = set(city);

console.log(setValue);
console.log(getValue);