/* 
Remove duplicates from list
https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
*/

/* 
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
The order of the sequence has to stay the same.
Examples:
Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
*/

function distinct(a) {
  
    let arr = [];
    
    for (let i = 0; i < a.length; i++) {
      if (arr.includes(a[i])) {
        continue;
      } else {
        arr.push(a[i]);
      }
    }
    
    return arr;
}