// Напиши фукцнию findLongestWord(string), 
// которая принимает параметром произвольную строку 
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
// let shortWord = 1;
const findLongestWord = function(string) {
  // твой код
  if (string !== Number) {
      return;
  }
  for (i = 0; i < string.splite(' ').length; i++) {
      console.log(string);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'