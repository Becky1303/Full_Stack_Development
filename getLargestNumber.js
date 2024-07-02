/**
 Write a function getLargestNumber that:

Takes a non-empty array numbers.
Returns the largest number stored in this array
 */


function getLargestNumber(numbers) {
  let largestNum = numbers[0]
  for (let i = 1; i < numbers.length; i++){
    if (numbers[i]>largestNum){
      largestNum = numbers[i];
    }
  }return largestNum
}
