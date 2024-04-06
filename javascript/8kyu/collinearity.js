/* 
Collinearity
https://www.codewars.com/kata/65ba420888906c1f86e1e680/train/javascript
*/

/* 
Problem Description
Write the function collinearity(x1, y1, x2, y2), which returns a Boolean type depending on whether the vectors are collinear or not.
all coordinates are integers
-1000 <= any coordinate <= 1000
Notes
All vectors start from the origin (x=0, y=0).
Be careful when handling cases where x1, x2, y1, or y2 are zero to avoid division by zero errors.
A vector with coordinates (0, 0) is collinear to all vectors.
Examples
(1,1,1,1) ➞ true
(1,2,2,4) ➞ true
(1,1,6,1) ➞ false
(1,2,-1,-2) ➞ true
(1,2,1,-2) ➞ false
(4,0,11,0) ➞ true
(0,1,6,0) ➞ false
(4,4,0,4) ➞ false
(0,0,0,0) ➞ true
(0,0,1,0) ➞ true
(5,7,0,0) ➞ true
*/

function collinearity( x1,y1, x2,y2 ) {
    if (x1 === 0 && x2 === 0) {
      return true;
    } else if (y1 === 0 && y2 === 0) {
      return true;
    } else if ((x1 === 0 && y1 === 0) || (x2 === 0 && y2 === 0)) {
      return true;
    } else if (x2 / x1 === y2 / y1) {
      return true;
    } else {
      return false;
    }
}