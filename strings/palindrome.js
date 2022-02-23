function palindrome(str){
    var len = str.length/2;
    for(let i=0; i < len; i++){
        if(str[i]!== str[str.length-1-i]){
            return "Not a palindrome";
        }else{
            return "Is a palindrome";
        }
    }
}
console.log(palindrome('level'));