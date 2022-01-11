// This is an extension of recursion problem that is needed to solve fibonnacci seq
// This solution will resolve in linear time complexity

function fib(n){
   let results = [0,1] // fib(0) = 0 and fib(1) = 1
    for(var i = 2; i <=n; i++){
        results[i]= results[i-1]+ results[i-2];
    }
    return results[n];

}

console.log(fib(5));

// Also to get space complexity as O(1) we can do following
function fibWithSpace(n){
    let current = 2;
    let  prev = 1;
    let prev2=0;
     for(var i = 2; i <=n; i++){
        current = prev + prev2;
        prev2 = prev;
        prev = current;
     }
    return current;
 
 }
 console.log(fibWithSpace(5))

 // Staircase problem , where we need to find ways to reach to nth staircase also uses fibonnaci seq just that 
 // it uses febonacci(n+1) to get the ways
/*
Given is a func that needs to find the ways to reach to nth staircase only by taking 1 or 2 step at a time

*/
 function staircase(n){
    let results = [1,1] // fib(0) = 0 and fib(1) = 1
    for(var i = 2; i <=n; i++){
        results[i]= results[i-1]+ results[i-2];
    }
    return results[n];
 }

 // if n = 1 we need to calculate for feb(n+1)

 console.log(staircase(4));

 //4
 //(1,1,1,1),(2,2),(3,1)(1,3),(1,2,1),(1,1,2),(2,1,1)


 