function setUnionOfAnyAmountOfSets(...args) {
  // Returns a set with the union of all sets in the input arguments

  let set = new Set();
  let array = []

  // Adds all the sets in the input args to an array
  for (let a = 0; a < arguments.length; a++){
    array.push(arguments[a])
  }

  // Loops through the array and each set element in the array and adds the values of the sets to a new set
  for (let a = 0; a < array.length; a++){
    for (var elem of array[a]) { 
      set.add(elem); 
    }
  }
  
  // For testing
  console.log(set)
  return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;