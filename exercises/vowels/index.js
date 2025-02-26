// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let chars = {};

  for (let char of str.toLowerCase()) {
    chars[char] = chars[char]++ || 1;
  }

  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;

  for (let char in chars) {
    if (vowels.includes(char)) {
      counter += chars[char];
    }
  }
  return counter;
}

module.exports = vowels;
