/* 
Sum Mixed Array
https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
*/

/* 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
*/

function sumMix(x) {

    let intArr = [];
    
    for (let i = 0; i < x.length; i++) {
      intArr.push(Number(x[i]));
    }
    
    let sum = 0;
    for(let i = 0; i < intArr.length; i++) {
      sum += intArr[i];
    }
    
    return sum;
    
}

// Add second solution witten with reduce method:
/* 
function sumMix(x) {

  return x.reduce((acc, val) => acc + Number(val), 0);

}
*/

// Refactor the for loop solution:

/* 
function sumMix(x) {

  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  
  return sum;
  
}
*/