/* 
Fake Binary
https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
 */

/* 
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string
 */

function fakeBin(x) {
  
    let output = [];
    let array = x.split('');
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 5) {
        array[i] = 0;
        output.push(array[i]);
      } else {
        array[i] = 1;
        output.push(array[i]);
      }
    }
    
    return output.join('');
}