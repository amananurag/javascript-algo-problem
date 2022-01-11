/*
Find the largest element in array
e.g arr[2,6,44,34] Ans = 44
*/
function largestFinder(arr){
    var max = arr[0];
    for(let i=1; i < arr.length; i++){
        max = max > arr[i]?max:arr[i];
    }
     return max;
}
console.log(largestFinder([2,6,44,35]));
/**
 * Duplicate Array Finder
 */
function duplicateFinder(arr){
     return arr.filter((item, pos, arr) => {
         return  arr.indexOf(item) == pos;
    }) 
}
console.log(duplicateFinder([1,2,2,3,4,4]))