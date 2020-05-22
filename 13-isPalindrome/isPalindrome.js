function isPalindrome(word) {
  // Returns true/false if input string is/isn't a palindrome

  return word === word.split('').reverse().join('');
}

// Do not edit this line;
module.exports = isPalindrome;