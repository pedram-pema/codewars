/* 
Convert number to reversed array of digits
https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascripts
 */

/* 
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
 */

function digitize(n) {
    let reversedArr = [];
  
    let iterablePara = Array.from(String(n));
    
    for (let i = iterablePara.length - 1; i >= 0; i--) {
      reversedArr.push(Number(iterablePara[i]));
    }
    return reversedArr;
  }
