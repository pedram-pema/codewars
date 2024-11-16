/* 
Changing letters
https://www.codewars.com/kata/5831c204a31721e2ae000294/train/javascript
*/

/* 
When provided with a String, capitalize all vowels
For example:
Input : "Hello World!"
Output : "HEllO WOrld!"
Note: Y is not a vowel in this kata.
*/

function swap (string) {
    return string.split("").map(item => {
      if (/[aeiou]/.test(item)) {
        return item.toUpperCase();
      } else {
        return item;
      }
    }).join("");
}