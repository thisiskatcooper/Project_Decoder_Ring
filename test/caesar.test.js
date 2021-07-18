// Write your tests here!

// const alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

function caesar(input, shift, encode) {
// input refers to input text to be encoded/decoded
// shift refers to how much a letter is shifted
  // positive shift -> right shift
  // negative shift -> left shift
// encode refers to whether message should be encoded or decoded
  // default is set to true

// check to make sure shift meets conditions
// steps: take string input and convert to lowercase, maintain spaces
// if encode === true, 
// DO SOMETHING ABOUT THE WRAP-AROUND!!


// convert to lower case and ignore capitalization
// let input = input.toLowerCase;

// let newPosition = position + shift % alphabet.length;

// return input
//   .split('')
//   .map(letter => {
//   const encodedLetter = letter.charCodeAt(0);
//   if (' ' === letter) return letter;

// return letter.toUpperCase().charCodeAt(0) + shift > 90 ? String.fromCharCode(letter + shift -90 + 64) : String.fromCharCode(letter + shift);
  
// return false if no shift, shift = 0, shift less than -25, or shift greater than 25
if (!shift || shift = 0 || shift < -25 || shift > 25) return false;

// })
// .join('');
}