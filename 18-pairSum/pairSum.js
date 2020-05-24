function pairSum(nums, target) {
  // Checks if two distinct nums in the input array sum to input target number

  // Error check
  if (nums.length <= 1) throw "Length of array is not more than 1!";
  
  // Loops through each element of the array and after validating, checks if sums to target num
  for (let a = 0; a < nums.length; a++) {
    for (let b = 0; b < nums.length; b++){
      if (a !== b && nums[a] + nums[b] === target) {
        return true;
      }
    }
  }

  // If nothing found, return false
  return false;
}

// Do not edit this line;
module.exports = pairSum;