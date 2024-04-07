/* 
Lario and Muigi Pipe Problem
https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
*/

/* 
Given a list of unique numbers sorted in ascending order.
Return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/

function pipeFix(numbers) {
  
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let sorted = [];
    
    for (let i = min; i <= max; i++) {
      sorted.push(i);
    }
    
    return sorted;
}

// Add a second solution done by using do...while:
/* 
function pipeFix(numbers) {
  const result = [];
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  do {
    result.push(min);
    min++;
  } while (min <= max);

  return result;
}
*/

function pipeFix(numbers){
  
    let sorted = [];
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === numbers[i+1] + 1) {
          sorted.push(numbers[i]);
        } else if (numbers[i] !== numbers[i+1] + 1) {
          sorted.push(numbers[i] + 1);
        }
      }
    
    return sorted;
  }