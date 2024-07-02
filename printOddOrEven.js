/* Now let's practice using if and else. Write a function printOddOrEven, which takes a positive integer (as a parameter n), and prints in the console:

The word even — if the number n is even.
The word odd — if the number n is odd.
💡 Even numbers can be divided by 2 without a remainder, while odd numbers result in a remainder of 1.
*/



function printOddOrEven(n)
{
  if ((n % 2) == 0)
  {
    console.log('even');
  } else {
    console.log('odd')
  }
}
