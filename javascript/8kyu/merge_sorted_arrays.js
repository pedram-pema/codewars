/* 
Merging sorted integer arrays (without duplicates)
https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript
*/

/* 
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/

function mergeArrays(a, b) {
    let arr = [...a, ...b].sort((a,b) => a-b);
    return arr = [...new Set(arr)];
}  