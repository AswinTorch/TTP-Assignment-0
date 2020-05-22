function sumOfAllEvenNumbers(nums) {
  // Returns the number of all even numbers in input array

  let count = 0;
  nums.forEach((number) => {
    // If number is even, increase count
    count += (number % 2 === 0) ? 1 : 0;
  });

  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;