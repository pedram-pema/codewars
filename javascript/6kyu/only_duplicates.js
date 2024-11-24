/* 
Only Duplicates
https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript
*/

/* 
Given a string, remove any characters that are unique from the string.
Example:
input: "abccdefee"
output: "cceee"
*/

function onlyDuplicates(str) {
    return [...str].filter(char => str.indexOf(char) !== str.lastIndexOf(char)).join('');
}