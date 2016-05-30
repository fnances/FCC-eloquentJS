function mutation(arr) {
  var firstElement = arr[0].toLowerCase(),
      secondElement = arr[1].toLowerCase(),
      condition = true;
  for(var i = 0 ; i < secondElement.length ; i++){

    if(firstElement.indexOf(secondElement[i]) === -1 ){
      condition = false;
      return condition;
    }
    else {
      condition = true;

}
  return condition;

}

mutation(["hello", "hey"]);
