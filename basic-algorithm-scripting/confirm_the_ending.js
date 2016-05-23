function confirmEnding(str, target) {
  var indexSubstr = str.length - target.length,
      checkIfExists = str.substr(indexSubstr, target.length);

      if(checkIfExists === target) return true;
      else return false;
}

confirmEnding("Bastian", "n");
