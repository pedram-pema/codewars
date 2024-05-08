/* 
To square(root) or not to square(root)
https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
*/

/* 
Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:
If the number has an integer square root, take this, otherwise square the number.
Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/

function squareOrSquareRoot(array) {
  
    let expectedArr = [];
    
    for (let i = 0; i < array.length; i++) {
      let root = Math.sqrt(array[i]);
      if (Number.isInteger(root)) {
        expectedArr.push(root);
      } else {
        expectedArr.push(Math.pow(array[i], 2));
      }
    }
    
    return expectedArr;
    
}

/* 
Add solution using map method:

function squareOrSquareRoot(array) {
    
    return array.map(item => {
      if (Number.isInteger(Math.sqrt(item))) {
        return Math.sqrt(item);
      } else {
        return Math.pow(item, 2);
      }
    });

}

*/

/* 
Refactor 2nd solution using ternary

function squareOrSquareRoot(array) {
    
  return array.map(item => Number.isInteger(Math.sqrt(item)) ? Math.sqrt(item) : Math.pow(item, 2));

}

*/