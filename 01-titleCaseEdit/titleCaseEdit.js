function titleCaseEdit(title) {
  // The given title is first split into an array of words
  let finalTitle =  title.split(' ')
  // The map function iterates and uppercases each word in the array
  .map((word) => {
    return (word.charAt(0).toUpperCase() + word.slice(1))
  }) // Finally, the join method is called to combine the words into one string
  .join(' ')

  return finalTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;