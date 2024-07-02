/**
 Write a function countConsonants that:

Takes a string input.
Returns the consonant count in that string.
💡 There are 20 consonants: b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, z.
 */

/*function isConsonant(char){
  if ((char !== 'a') || (char !== 'e') || (char !== 'i') || (char !== 'o') || (char !== 'u')) {
    return true
  }

}
*/

function countConsonants(input) {
  let cCount = 0;
  let vowels = 'aeiouy';
  input = input.toLowerCase();
  for (let i = 0; i < input.length; i++){
    if ((input[i] !== ' ') && !(vowels.includes(input[i]))) {
        cCount += 1;
      }
  } return cCount
}
