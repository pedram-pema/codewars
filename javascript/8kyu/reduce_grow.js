/* 
Beginner - Reduce but Grow
https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
 */

/* 
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */

function grow(x) {
    
    let product = 0;
    
    for (let i = 1; i < x.length; i++) {
      if (i === 1) { 
        product = x[i - 1] * x[i]; 
      } else {
        product = product * x[i];
      }
    }
    
    return product;
}