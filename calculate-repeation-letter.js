/*
calculate repeatation of each letter in string
This can be used to solve amalgam problems as well.

*/
function calculateRepeatition(str) {
    var strLetterCount = str.toLowerCase();
    var result = {};
    for (var char of strLetterCount) {

        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }

    }
    return result;


}
console.log(calculateRepeatition("hello"))