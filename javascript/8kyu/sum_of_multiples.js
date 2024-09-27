/* 
Sum of Multiples
https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
*/

/* 
Your Job
Find the sum of all multiples of n below m
Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

function sumMul(n,m){
    if ( n <=0 || m <=0) {
      return "INVALID";
    }
    let arr = [];
    let sum = 0;
    let i = 1;
    while (n*i < m) {
      sum = n*i;
      i++;
      arr.push(sum);
    }
    return arr.reduce((sum, item) => sum + item, 0);
}