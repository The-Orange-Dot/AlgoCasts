// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let num = n.toString().split("").reverse().join("");
  num = parseInt(num);

  return n < 0 ? num * -1 : num;
}

module.exports = reverseInt;
