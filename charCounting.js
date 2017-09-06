function countLetters(str){
  const splitWords = str.split(' ').join('').toLowerCase();
  const splitLetters = splitWords.split('');
  let letters = {};

  for(let i = 0; i < splitLetters.length; i++){
    const char = splitLetters[i];

    /* loops through the length of SplitLetters and
       stores them onto char
    */
    if (letters[char] === undefined){
      letters[char] = 1;
      /*
      this adds char the object letters as keys
      checks to see the characters are undefined because it has
      not occured before. it is undefined because it was not added as a key.
       if it is undefined the value is set to 1

      */
    } else {
      letters[char] += 1;
/* if it is defined add one to offset the counter which starts at undefined
*/
    }
  }


  return letters;
}

console.log(countLetters("Lighthouse inl the house"));


