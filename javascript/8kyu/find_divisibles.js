/* 
Find numbers which are divisible by given number
https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript
*/

/* 
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
First argument is an array of numbers and the second is the divisor.
Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/

function divisibleBy(numbers, divisor) {
    let arr = [];
    
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % divisor === 0) {
        arr.push(numbers[i]);
      }
    }
    
    return arr;
}

/* 
Add solution using filter method:

function divisibleBy(numbers, divisor) {
 
  return numbers.filter(item => item % divisor === 0);
  
}

*/