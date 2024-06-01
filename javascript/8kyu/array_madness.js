/* 
SpeedCode #2 - Array Madness
https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript
*/

/* 
Given two integer arrays a, b, both of length >= 1, 
create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
E.g.
arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
*/

function arrayMadness(a, b) {
  
    let sumA = 0;
    for (let i = 0; i < a.length; i++) {
      sumA += Math.pow(a[i], 2);
    }
    
    let sumB = 0;
    for (let i = 0; i < b.length; i++) {
      sumB += Math.pow(b[i], 3);
    }
    
    return sumA > sumB;
    
}

/* 
Write a solution using reduce method:

function arrayMadness(a, b) {
  return a.reduce((total, value) => total += Math.pow(value, 2) , 0) > b.reduce((total, value) => total += Math.pow(value, 3) , 0)
}

*/