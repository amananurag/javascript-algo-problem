/*
A binary search is has time complexity of linear and can be used only on sorted arrays to work.


*/
function binarySearch(arr, value){
    var start = 0;
    var end = arr.length-1;
    var middle = Math.floor((start+end)/2);
    while(value !== arr[middle] && start <= end){
        if(value > arr[middle]){
            start = middle+1;
        }else{
            end = middle-1;
        }
        middle = Math.floor((start+end)/2);
    }
    if(value === arr[middle]){
        return arr[middle];
    }else{
        return null
    }

}

console.log(binarySearch([2,4,6,8,88],4))