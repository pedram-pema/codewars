/* 
Calculate average
https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
*/

/* 
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

function findAverage(array) {
  
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    
    return array.length === 0 ? 0 : sum / array.length;
}