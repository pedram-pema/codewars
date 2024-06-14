/* 
Define a card suit
https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript
*/

/* 
You get any card as an argument. Your task is to return the suit of this card (in lowercase).
Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
    let lastChar = card[card.length-1];
    
    switch (lastChar) {
        case "♣":
        return "clubs";
        case "♦":
        return "diamonds";
        case "♥":
        return "hearts";
        case "♠":
        return "spades";
    }
}