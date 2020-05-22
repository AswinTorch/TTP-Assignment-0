function sumOfMinimumAndMaximum(nums) {
  // Returns the sum of the lowest value and the highest value in input array

  return Math.min(...nums) + Math.max(...nums);
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;