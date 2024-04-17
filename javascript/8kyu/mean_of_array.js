/* 
Get the mean of an array
https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
*/

/* 
It's the academic year's end, fateful moment of your school report.
The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.
The array will never be empty.
*/

function getAverage(marks) {
  
    let length = marks.length;
    let sum = 0;
    
    for(let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    
    return Math.floor(sum/length);
}

// Add a second solution using reduce method:
/* 
function getAverage(marks){
  let sum = marks.reduce((acc, val) => acc + val);
  return Math.floor(sum/marks.length);
}
*/