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

/* Another solution using reduce method:

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  
  let sum = array.reduce(averager);
  
  function averager(total, num) {
    return total + num;
  }
  
  return sum / array.length;
} */

// A revised version of second solution:

/* 
function findAverage(array) {
  
  let sum = array.reduce(averager, 0);
  
  function averager(total, num) {
    return total + num;
  }
  
  return sum === 0 ? 0 : sum / array.length;
}
*/