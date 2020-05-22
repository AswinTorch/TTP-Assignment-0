function countOfAllIndexMatchingNumbers(nums) {
  // Returns the count of numbers in input array that are equal to its index

  // Variable to track count in array
  let count = 0;
  // Loops through array and increments count if applicable
  for (let a = 0; a < nums.length; a++){
    if (nums[a] === a) {
      count++;
    }
  }

  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;