/* 
Exclamation marks series #2: Remove all exclamation marks from the end of sentence
https://www.codewars.com/kata/57faece99610ced690000165/train/javascript
*/

/* 
Description:
Remove all exclamation marks from the end of sentence.
Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

function remove(string) {  
    while (string[string.length-1] === "!") {
      string = string.slice(0,-1);
    }
    return string;
}