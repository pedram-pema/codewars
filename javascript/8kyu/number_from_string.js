/* 
Get number from string
https://www.codewars.com/kata/57a37f3cbb99449513000cd8/train/javascript
*/

/* 
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
Function:
getNumberFromString(s)
*/

function getNumberFromString(s) {
    let number = s.split("").filter(item => '0' <= item && item <= '9').join("");
    return number ? Number(number) : 0;
}  