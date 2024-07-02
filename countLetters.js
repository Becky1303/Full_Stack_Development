/*
 Write a function countLetters, which should:

Accept a string input.
Return the letter count of the string.
💡 Don't count all characters — just the letters.
 */


function isLetter(ch) {
  return ch.toLowerCase() !== ch.toUpperCase();
}
function countLetters(input) {
  let lCount = 0;
  for (let i = 0; i < input.length; i++){
    if (isLetter(input[i])){
      lCount += 1;
    }
  }
  return lCount
}
