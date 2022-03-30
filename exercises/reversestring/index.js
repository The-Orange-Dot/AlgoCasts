// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //=========================
  // return str.split("").reverse().join("");
  //=========================
  // let newString = [];
  // str.split("").forEach((item) => {
  //   newString.unshift(item);
  // });
  // return newString.join("");
  //=========================
  return str.split("").reduce((reversed, item) => item + reversed, "");
}

module.exports = reverse;
