/* 
Is it a palindrome?
https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
 */

/* 
Task:
Write a function that checks if a given string (case insensitive) is a palindrome.
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
 */

function isPalindrome(x) {
    let caseInsensitive = x.toLowerCase();
    let reversed = caseInsensitive.split('').reverse().join('');
    return reversed === caseInsensitive;
}