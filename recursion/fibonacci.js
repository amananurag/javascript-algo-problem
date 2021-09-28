// calculate fibonacci for nth number 
// 0,1,1,2,3,5,8 
// fibonacci seq is equal to sum of last two number
// f(0) = 0
// f(1) = 1
// f(2) = f(1) + f(0)
// f(n) = f(n-1)+ f(n-2);
function fib(n) {
    if (n < 2) return n;
    else {
      return fib(n-1) + fib(n-2)
    }
  }
function printFib(n) {
    for(var i=0; i < n; i++){
        console.log(fib(i))
    }
}
console.log(printFib(5));