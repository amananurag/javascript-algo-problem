/*
Reverse a string


*/
function reverseString(str){
    var result = [];
    for(var i=str.length; i > 0; i--){
       result.push(str[i]);
      }
 return result.join('');
      
}
console.log(reverseString("Welcome to javascript how to reverse a string"));