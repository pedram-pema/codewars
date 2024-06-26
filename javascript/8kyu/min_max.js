/* 
Find Maximum and Minimum Values of a List
https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
*/

/* 
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input.
and return the largest and lowest number in that list, respectively.
Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
*/

var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}

// It can be done using reduce sort and filter 

// Add solution written with reduce method:
/* 
var min = function(list){
    
    return list.sort((a, b) => a-b)[0];
}

var max = function(list){
    
    return list.sort((a, b) => a-b)[list.length -1];
}
*/

// Rewrite using for loop:
/* 
var min = function(list){
  
  let minimum = list[0];
    
  for (let i = 1; i < list.length; i++) {
    if (list[i] < minimum) {
      minimum = list[i];
    }
  }  
  
  return minimum;
  
}

var max = function(list){
    
  let maximum = list[0];
    
  for (let i = 1; i < list.length; i++) {
    s
  }  
  
  return maximum;
}
*/

// Add solution written with forEach:
/* 
var min = function(list){
  
  let minimum = list[0];
    
  list.forEach(item => {
    if (item < minimum) {
      minimum = item;
    }
  });
  
  return minimum;
  
}

var max = function(list){
    
  let maximum = list[0];
    
  list.forEach(item => {
    if (item > maximum) {
      maximum = item;
    }
  });
  
  return maximum;
}
*/

// Add solution using reduce method:
/* 
var min = function(list){
    
    return list.reduce((min, val) => val < min ? val : min, list[0]);
}

var max = function(list){
    
    return list.reduce((max, val) => val > max ? val : max, list[0]);
}
*/