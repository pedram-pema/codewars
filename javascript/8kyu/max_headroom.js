/* 
Max Headroom and JavaScript style
https://www.codewars.com/kata/52a47dd7e950edabfa000391/train/javascript
 */

/* 
Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value?
Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?
 */

function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  return { //Remove the line break to avoid ASI.
    name: 'Max Headroom'
  }
}