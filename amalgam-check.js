/*
A string amalgam is a word that has same combination and frequency of letter

eg: cinema = iceman 

*/
function isAnagram(first, second) {
    if(first.length !== second.length){
        return false;
    }
    var firstLetterCount = first.toLowerCase();
    var secondLetterCount = second.toLowerCase();
    var firstResult = {};
    var secondResult = {};
    var res = false;
   
   
    for (var char of firstLetterCount) {

        if (firstResult[char]) {
            firstResult[char]++;
        } else {
            firstResult[char] = 1;
        }

    }

    for (var char of secondLetterCount) {

        if (secondResult[char]) {
            secondResult[char]++;
        } else {
            secondResult[char] = 1;
        }

    }
   
   for(var key in firstResult){
       
       if(!(key in secondResult)){
            res = false;
          
       }
       else if(firstResult.key !== secondResult.key){
           
           res = false;
       }else{
           res = true;
       }
      
      
   }
      return res;
      
      
}
console.log(isAnagram("iceman","cinema"))