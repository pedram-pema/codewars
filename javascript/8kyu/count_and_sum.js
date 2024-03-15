/* 
Count of positives / sum of negatives
https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
*/

/* 
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  
    if (input === [] || input === null) {
      return [];
    }
    
    let posCount = 0;
    let negSum = 0;
    
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        posCount++;
      } else if (input[i] < 0) {
        negSum += input[i];
      }
    }
    
    return posCount === 0 && negSum === 0 ? [] : [posCount, negSum];
}