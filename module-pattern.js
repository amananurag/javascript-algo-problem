/*
A setter and getter function 
*/

function modulePattern(){
    var result = {};
    function inner(key, value){
         if(value !== undefined){
           result[key]= value;
           console.log(result);
         }else{
             return result[key];
         }
    }
    return inner;
}

var set = modulePattern();
var get = modulePattern();
var setValue = set('city', "paris");
var getValue = get("city");

console.log(setValue);
console.log(getValue);