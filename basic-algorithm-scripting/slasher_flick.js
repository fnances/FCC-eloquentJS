function slasher(arr, howMany) {
  // it doesn't always pay to be first
   var myArray = [];

  myArray = arr.slice(howMany);

  return myArray;
}

slasher([1, 2, 3], 2);
