/* 
All Star Code Challenge #18
https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
*/

/* 
Create a function that accepts a string and a single character,
and returns an integer of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
*/

function strCount(str, letter) {  
  
    let counter = 0;
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === letter) {
        ++counter;
      }
    }
    return counter;
    
}

/* 
Add second solution using reduce method:

function strCount(str, letter) {
  return str.split("").reduce((counter, char) => {
    return (char === letter) ? ++counter : counter;
  }, 0);
}

*/