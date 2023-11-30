/* Training JS #5: Basic data types--Object
https://www.codewars.com/kata/571f1eb77e8954a812000837 */

/* Task
Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."
When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata. */

function animal(obj){
    let obj = {name:'obj.name', legs:'obj.legs', color:'obj.color'}
    return 'This' + ' ' + obj.color + ' ' + obj.name + ' ' + 'has' + ' ' + obj.legs + ' ' + 'legs.';
  }