/* 
Gravity Flip
https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
*/

/* 
Examples (input -> output:
* 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
*/

const flip=(d, a)=> {
  
    return (d === "R") ? a.sort((a, b) => a-b) : a.sort((a, b) => b-a);
    
}