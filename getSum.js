/**
 * Add a loop inside the getSum function to calculate the sum of the numbers stored in the numbers array
 */


function getSum(numbers) {
  let sum = 0;

  // write code here
  for (const num in numbers){
    sum += numbers[num];
  }
  return sum;
}
