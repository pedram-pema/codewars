/* 
Exes and Ohs
https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
*/

/* 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    let xCount = 0;
    let oCount = 0;
    
    let arr = str.split("");
    arr.forEach(item => {
      if(item.toLowerCase() === "x") {
        ++xCount;
      } else if(item.toLowerCase() === "o") {
        ++oCount;
      }
    });
    
    return xCount === oCount;
}