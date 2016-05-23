function bouncer(arr) {
   var newArray = [];

  newArray = arr.filter( function(value){
    return Boolean(value);
  });

  return newArray;

}

bouncer([7, "ate", "", false, 9]);
