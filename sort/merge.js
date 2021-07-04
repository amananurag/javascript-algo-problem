/*
Merge sort of array
*/
function sort(arr){
    if(arr.length <=1) return arr;
     let mid = Math.floor(arr.length/2);
     let left = sort(arr.slice(0,mid));
     let right = sort(arr.slice(mid));
    
     return merge(left,right)
    
    }
    function merge(left,right){
        let i=0;
        let j = 0;
         let results = [];
        while(i < left.length && j < right.length){
            if(left[i] < right[j]){
                 results.push(left[i]);
                  i++;
            }else{
                 results.push(right[j]);
                  j++;
            }
        }
         while(i < left.length){
              results.push(left[i]);
              i++;
         }
          while(j < right.length){
              results.push(right[j]);
              j++;
         }
    return results;
    }
    console.log(sort([2,1,7,46,88,77]));