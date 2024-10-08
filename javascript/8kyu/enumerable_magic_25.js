/* 
Enumerable Magic #25 - Take the First N Elements
https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript
*/

/* 
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
If you need help, here's a reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

function take(arr, n) {
    return arr.slice(0, n);
}