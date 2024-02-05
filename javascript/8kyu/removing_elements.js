/* 
Removing Elements
https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
 */

/* 
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
 */

function removeEveryOther(arr) { 
  
    let remove = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        remove.push(arr[i]);
      }
    }
    
    return remove;
}