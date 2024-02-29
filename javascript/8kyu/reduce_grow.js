/* 
Beginner - Reduce but Grow
https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
 */

/* 
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */

function grow(x) {

    let product = 1;
    
    for (let i = 0; i < x.length; i++) {
      product *= x[i]
    }
    
    return product;
}

/*

Second solution using for...of loop:

function grow(x) {
    let result = 1;
    
    for(let num of x) {
      result *= num;
    }
    
    return result;
}

*/  