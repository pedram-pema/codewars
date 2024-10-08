/* 
Isograms
https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
*/

/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
Example: (Input --> Output)
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str){
    let sortedArr = str.toLowerCase().split("").sort();
    
    for(let i = 1; i < sortedArr.length; i++) {
      if (sortedArr[i] === sortedArr[i-1]) {
        return false;
      }
    }
    
    return true;
}