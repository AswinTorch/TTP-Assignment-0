function frequencyCounter(word) {
  // Outputs the frequency of letters in input word

  let frequencyObj = {}

  // Iterates through the word and maps the frequency of each letter in the object 
  word.split('').forEach((letter) => {
    frequencyObj[letter] = frequencyObj[letter] ? frequencyObj[letter] + 1: 1;
  })

  return frequencyObj;
}

// Do not edit this line;
module.exports = frequencyCounter;