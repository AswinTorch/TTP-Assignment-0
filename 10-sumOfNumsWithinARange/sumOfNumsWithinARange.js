function sumOfNumsWithinARange(nums, start, end) {
  // Returns the count of numbers in input array between the range of input start and end values

  let count = 0;
  nums.forEach((number) => {
    count += (number >= start && number <= end) ? 1 : 0;
  })

  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;