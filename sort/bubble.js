/*
 Sorting solution using bubble sort

*/
function bubblesort(arr){
    for (var i = arr.length; i >0; i--){
      for (var j = 0; j < i-1; j++){
           if(arr[j] > arr[j+1]){
             var temp = arr[j];
             arr[j] = arr[j+1];
             arr[j+1] = temp;
           }
     
    }
    }
   
   
    return arr;
  }
  
  
  console.log(bubblesort([1,2,2,3,7,4,2]))