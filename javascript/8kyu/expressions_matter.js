/* 
Expressions Matter
https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript
*/

/* 
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
*/



/* 
Incomplete second method:
function expressionMatter(a, b, c) {
  
  if (a === 1 && b === 1 && c === 1) {
    return 1;
  }
  
  let biggest = a;
  let sum = 0
  let arr = [...a, b, c];
  for (let i = 0; i < arr.length; i++) {
    if (biggest <= arr[i]) {
      biggest = arr[i];
    }
  }
  
}
*/

function expressionMatter(a, b, c) {
  
    let arr = [];
    let min = Math.min([...a, b, c]);
    let max = Math.max([...a, b, c]);
    let remaining = arr.filter(num => num !== min && num !== max);
    let mid = remaining[0]
    
    if (a + b + c === 3) {
      return 3;
    } else if (min === max) {
      return a * b * c;
    } else if () {
      
    }
    
  }