/* 
Surface Area and Volume of a Box
https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript
 */

/* 
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
 */

function getSize(width, height, depth) {
    let size = [];

    let area = 2 * ((width * height) + (width * depth) + (height * depth));
    let volume = width * height * depth;
  
    size.push(area);
    size.push(volume);
  
    return size;
}