// print number from n to 1
function printNum(n){
    if(n == 0) return  ;
    console.log(n);
    printNum(n-1);
}

console.log(printNum(5));

// print number from 1 to n 
function printNumOrder(n){
    if(n == 0) return  ;
    printNumOrder(n-1);
    console.log(n);
}

console.log(printNumOrder(5));
// sum of number upto n
function printSum(n){
    if(n == 0) return 0 ;
   return  printSum(n-1)+n;

}
console.log(printSum(5));
// Print factorial
function factorial(n){
    if(n == 0) return 1 ;
   return  factorial(n-1) *n;

}
console.log(factorial(5));
