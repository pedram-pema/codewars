/* 
Count by X
https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
 */

/* 
Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
 */

function countBy(x, n) {
    let z = [];
    let multiple = 1;
    
    for (let i = 1; i <= n; i++) {
      multiple = x * i;
      z.push(multiple);
    }
  
    return z;
}

// Since there is no vital need for multiple viaraible, The above solution can be optimized by removing lines 18 and 21:

function countBy(x, n) {
    let z = [];
    
    for (let i = 1; i <= n; i++) {
      z.push(multiple);
    }
  
    return z;
}