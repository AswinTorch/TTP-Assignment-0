function productOfAnyAmountOfNumbers(...args) {
  // Returns the product of the input numbers

  return args.reduce((prev, curr) => {
    return prev * curr;
  })
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;