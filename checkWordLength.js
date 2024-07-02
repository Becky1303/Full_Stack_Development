/*
Write a function checkWordLength, which takes a string word and prints one of the following statements to the console:

word followed by " is a short word", if word has less than 5 characters.
word followed by " is a long word", if word has 5 or more characters.
*/


function checkWordLength(word) {
  if (word.length < 5)
  {
    console.log(`${word} is a short word`)
  } else {
    console.log(`${word} is a long word`)
  }
}
