/* 
Exclamation marks series #1: Remove an exclamation mark from the end of string
https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript
*/

/* 
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

function remove (string) {
    if (string[string.length-1] === "!") {
      return string.slice(0, -1);
    } else {
      return string;
    }
}