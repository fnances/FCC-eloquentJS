function countBs(string){
  var counter = 0;
  for(var i = 0 ; i < string.length ; i++){

    if(string.charAt(i) === "B") counter++;

  }
  
  return counter;

}

console.log(countBs("BBCSB"));


function countChar(string, char){
  var counter = 0;

  for(var i = 0 ; i < string.length ; i++){

    if(string.charAt(i) === char ) counter++;

  }

  return counter;

}

console.log(countChar("kkkkkssadasfasfkkkk", "k"));
