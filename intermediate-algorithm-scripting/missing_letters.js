function fearNotLetter(str) {

  var missingLetter = false;

  for( var i = 0 ; i < str.length ; i++){

    if(str.charCodeAt(i) + 1 < str.charCodeAt(i + 1) ){
      var charCodeDifference = str.charCodeAt(i + 1 ) - 1;
       missingLetter = String.fromCharCode(charCodeDifference);
       return missingLetter;
    }
  }

  return undefined;

}

fearNotLetter("yz"); 
