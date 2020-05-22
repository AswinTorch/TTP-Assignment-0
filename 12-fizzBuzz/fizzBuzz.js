function fizzBuzz(start, end) {
  // Fizzbuzz
  let resultArray = [];

  for (let a = start; a <= end; a++){
    if (a % 3 === 0 && a % 5 === 0) {
      resultArray.push("FizzBuzz");
    } else if (a % 3 === 0){
      resultArray.push("Fizz");
    } else if (a % 5 === 0){
      resultArray.push("Buzz");
    } else {
      resultArray.push(a);
    }
  }

  return resultArray;
}

// Do not edit this line;
module.exports = fizzBuzz;