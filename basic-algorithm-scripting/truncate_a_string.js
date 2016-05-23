
function truncateString(str, num) {
  var dots = "...",
      truncatedString;

  if ( num <= 3) truncatedString = str.slice(0, num);
  else if(str.length > num) truncatedString = str.slice(0, num - dots.length);
  else return str;

  truncatedString += dots;

  return truncatedString;



}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
