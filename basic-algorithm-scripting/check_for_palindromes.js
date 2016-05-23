function palindrome(str) {
 var word = str.toLowerCase().replace(/[\W_]+/g, ""),
     reversedWord;
        reversedWord = word.split('');
        reversedWord = reversedWord.reverse().join('');



  if(word === reversedWord) return true;
  else return false;

}
 palindrome("eye");
