function findLongestWord(str) {
  var longestWord = str.split(' '),
      length = longestWord.length,
      lengthOfLastWord;

  function compare(a,b){
    if(a.length < b.length)
      return -1;
    if(a.length > b.length)
      return 1;

    return 0;
  }

  longestWord = longestWord.sort(compare);
  lengthOfLastWord = longestWord[length - 1].length;

  return lengthOfLastWord;


}

findLongestWord("The quick brown fox jumped over the lazy dog");
