function countOfAllBooleansAndStrings(arr) {
  // Returns the number of booleans and strings in input array

  // Variable to track boolean/string count in array
  let count = 0;
  // Loops through array and increments count if a boolean or string is found
  for (let a = 0; a < arr.length; a++){
    if (arr[a] === true || arr[a] === false || typeof arr[a] === "string") {
      count++;
    }
  }

  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;