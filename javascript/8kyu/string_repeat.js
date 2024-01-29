/* 
String repeat
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
 */

/* 
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
 */

function repeatStr (n, s) {
  
    let str = '';
    
    for (let i = 1; i <= n; i++) {
      str += s;
    }
    
    return str;
}