function countOfAllBooleans(arr) {
  // Returns the number of booleans in input array

  // Variable to track boolean count in array
  let count = 0;
  // Loops through array and increments count if a boolean is found
  for (let a = 0; a < arr.length; a++){
    if (arr[a] === true || arr[a] === false) {
      count++;
    }
  }

  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;