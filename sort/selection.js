/*
Seletion sort where starting index is compared to lowest value element in the entire array
*/

function selectionsort(arr){
    var lowest;
    for(var i= 0; i < arr.length; i++)
  {
     lowest = i;
    for(var j=i+0; j < arr.length; j++){
      if(arr[j] < arr[lowest]){
        var temp = arr[j];
        arr[j] = arr[lowest];
        arr[lowest] = temp;
       
      }
   
    }
     
  }  
   
   
    return arr;
  }
  console.log(selectionsort([1,4,2,7,99,6,88,77]));