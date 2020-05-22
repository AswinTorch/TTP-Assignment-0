function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Returns the number of input array elements less than input target number

  // Variable to track nums less than target count in array
  let count = 0;
  // Loops through array and increments count if applicable
  for (let a = 0; a < nums.length; a++){
    if (nums[a] < target) {
      count++;
    }
  }

  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;