/* 
Unique In Order
https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
*/

/* 
Implement the function unique_in_order which takes as argument a sequence.
returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder=function(iterable) {
    let arr = [...iterable];
    let extractedArr = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        extractedArr.push(arr[i]);
      }
    }
    
    return extractedArr;
}

/*

TODO: see if it can be solved with a 0 to end for loop:
var uniqueInOrder=function(iterable) {
    let arr = iterable.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 1);
      }
    }
    return arr;
}

/* 
Reversed for loop solution:
var uniqueInOrder=function(iterable) {
    let arr = [...iterable];
    for (let i = arr.length; i > 0; i--) {
      if (arr[i] === arr[i - 1]) {
        arr.splice(i, 1);
      }
    }
    return arr;
}
*/

/* 
TODO: write a solution using filter or other high order method
*/