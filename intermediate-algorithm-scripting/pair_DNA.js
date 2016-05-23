function pairElement(str) {
  var DNA = {
    "A": "AT",
    "C": "CG",
    "G": "GC",
    "T": "TA"
  },
      pairedDNA = [] ;

  for(var i = 0 ; i < str.length ; i++){

    pairedDNA.push(DNA[str[i]].split(''));

  }

  return pairedDNA;
}

pairElement("GCG");
