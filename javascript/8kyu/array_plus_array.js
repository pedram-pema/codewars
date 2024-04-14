/* 
Array plus array
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
*/

/* 
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
*/

function arrayPlusArray(arr1, arr2) {
    let arr1Sum = 0;
    for(let i = 0; i < arr1.length; i++) {
      arr1Sum += arr1[i];
    }
    
    let arr2Sum = 0;
    for(let i = 0; i < arr2.length; i++) {
      arr2Sum += arr2[i];
    }
    
    return arr1Sum + arr2Sum;
}

// Add a second solution:
/* 
function arrayPlusArray(arr1, arr2) {
  let spread = [...arr1, ...arr2];
  let sum = 0;
  
  for (let i = 0; i < spread.length; i++) {
    sum += spread[i];
  }
  
  return sum;
}
*/