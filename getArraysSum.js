/**
 Create a getArraysSum function that:

Accepts two arrays of numbers; both arrays should be of equal length.
Returns the sum of their elements.

Example:
getArraysSum([1, 2], [3, 4]); // 10 (1 + 2 + 3 + 4)
getArraysSum([1, 2, 3, 4], [5, 6, 7, 8]); // 36
getArraysSum([], []); // 0

 */


function getArraysSum(arr1, arr2) {
  // write code here
 return getArraySum(arr1) + getArraySum (arr2)
}
function getArraySum(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum
}
