/* 
Tea for two
https://www.codewars.com/kata/555a7dc335d4c407af00006e/train/javascript
*/

/* 
Tea for two!
Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.
tea42('coffee') //should return 'coffee'
tea42('tea') //should return 'tea'
tea42('2ea') //should return 'tea'
tea42(9022) //should return '90tt'
tea42(5676765) //should return '5676765'
tea42('2u2u') //should return 'tutu'
*/

function tea42(input) {
    return String(input).split("").map(item => {
        if (item === "2") {
          return "t";
        }
        return item;
      }).join("");
}  