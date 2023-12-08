/* Training JS #10: loop statement --for
https://www.codewars.com/kata/5721a78c283129e416000999 */

/* Task
The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

If you forgot how to push an element to an array, please refer to lesson 4. */

function pickIt(arr){
    var odd=[],even=[];
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        even.push(arr[i]);
      } else if (arr[i] % 2 != 0) {
        odd.push(arr[i]);
      }
    }
    return [odd,even];
  }