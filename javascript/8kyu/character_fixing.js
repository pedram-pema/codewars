/* 
Correct the mistakes of the character recognition software
https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
*/

/* 
When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

function correct(string)
{
	let arr = string.split("");
  for (let i = 0; i < string.length; i++) {
    if (arr[i] === "0") {
      arr[i] = "O";
    } else if (arr[i] === "1") {
      arr[i] = "I";
    } else if (arr[i] === "5") {
      arr[i] = "S";
    }
  }
  return arr.join("");
}

/* 
Add solution using map method:
function correct(string)
{
	return string.split("").map(item => {
    if (item === "0") {
      return "O";
    } else if (item === "1") {
      return "I";
    } else if (item === "5") {
      return "S";
    } else {
      return item;
    }
  }).join("");
}

*/