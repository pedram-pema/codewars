/* 
Abbreviate a Two Word Name
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
 */

/* 
Task:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F

 */

function abbrevName(name){
    let arr = name.split(' ');
	let firstNameAbb = arr[0].toUpperCase().slice(0, 1);
	let lastNameAbb = arr[1].toUpperCase().slice(0, 1);
	let abb = `${firstNameAbb}.${lastNameAbb}`;
	return abb;
}
}