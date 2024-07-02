/* Write the checkNumber function that takes an integer and checks it against three criteria:

Is this number positive?
Is this an even number?
Is this number divisible by 10?
The function should return an array with check results as booleans (true and false).

Example
checkNumber(3); // [true, false, false]
checkNumber(10); // [true, true, true]
checkNumber(0); // [false, true, true]
checkNumber(-1); // [false, false, false]
*/


function checkNumber(n) {
  // write code here
  let check = [];
  check.push (n > 0)
  check.push (n % 2 === 0)
  check.push (n % 10 === 0)
  return check
}