
function repeatStringNumTimes(str, num) {
  var repeatedString = '' ;

  for(var i = 0 ; i < num ; i ++){
   repeatedString += str;
  }

  return repeatedString;
}

repeatStringNumTimes("abc", 3);
