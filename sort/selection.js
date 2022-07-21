/*
Seletion sort where starting index is compared to lowest value element in the entire array
*/

function selectionsort(arr){
    var lowest;
    for(var i= 0; i < arr.length; i++)
  {
     lowest = i;
    for(var j=i+1; j < arr.length; j++){
      if(arr[lowest] > arr[j]  ){
        var temp = arr[lowest];
        arr[lowest] = arr[j];

        arr[j] = temp;
       
      }
   
    }
     
  }  
   
   
    return arr;
  }
  console.log(selectionsort([200,1,4,2,7,99,6,88,77]));