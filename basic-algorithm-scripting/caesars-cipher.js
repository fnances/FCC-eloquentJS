function rot13(str) { // LBH QVQ VG!

  var decodedStr = [],
      decodedLetter;

  for(var i = 0 ; i < str.length ; i++){

    if((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 90)){

      if(str.charCodeAt(i) - 13 < 65){
         decodedLetter = String.fromCharCode(90 - ( 13 - (str.charCodeAt(i) - 65 )) + 1);
         decodedStr.push(decodedLetter);
      }else {
         decodedLetter = String.fromCharCode( str.charCodeAt(i) - 13 );
         decodedStr.push( decodedLetter );
        }

     }
    else decodedStr.push(str[i]);

  }
  return decodedStr.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
