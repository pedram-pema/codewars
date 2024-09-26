/* 
Count the divisors of a number
https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
*/

/* 
Count the number of divisors of a positive integer n.
Random tests go up to n = 500000, but fixed tests go higher.
Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/

function getDivisorsCnt(n) {
    if (n === 1) return 1;
    
    let count = 2;
    let sqrt = Math.sqrt(n);
    
    for (let i = 2; i <= sqrt; i++) {
      if (n % i === 0) {
        count += 2; 
        if (i === sqrt) count--; 
      }
    }
  
    return count;
}