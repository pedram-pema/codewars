/* 
Regex validate PIN code
https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/javascript
*/

/* 
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validatePIN (pin) {
    let score = 0;
    if(pin.length===4 || pin.length===6) {
      score++;
    }
      if(pin.split('').every(char => char >= '0' && char <= '9')) {
        score++;
      }
    return (score === 2);
}