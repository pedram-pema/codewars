/* 
Alternate capitalization
https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
*/

/* 
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
Good luck!
*/

function capitalize(s){
    let evenIndexed = s.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char).join('');
    let oddIndexed = s.split('').map((char, index) => index % 2 !== 0 ? char.toUpperCase() : char).join('');
    return [evenIndexed, oddIndexed];
}