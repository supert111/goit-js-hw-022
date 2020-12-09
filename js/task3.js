const findLongestWord = function(string) {
  if (string === Number) {
      return;
  }
  const words = string.split(' ');
  let longestWord = words[0];
  
  for (const word of words) {
      longestWord = word.length > longestWord.length ? word : longestWord;
    }
 
 return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

// const findLongestWord = function(string) {
//   if (string === Number) {
//       return;
//   }
//   let stringSplit = string.split(' ');
//   let longestWord = 0;
//   let word = null;
//   for (let i = 0; i < stringSplit.length; i++) {
//     if (stringSplit[i].length > longestWord) {
//       longestWord = stringSplit[i].length;
//       word = stringSplit[i];
//     }
//  }
//  return word;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'