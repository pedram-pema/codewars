/* 
Odd or Even?
https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
 */

/* 
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
 */

function oddOrEven(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    if (sum % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }