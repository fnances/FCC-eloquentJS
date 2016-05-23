function destroyer(arr) {
  var args = Array.from(arguments),
      finalArray = [];

  finalArray = args[0].filter( function (value) {

    return value !== args[1] &&  value !== args[2] && value !== args[3];

  });

  return finalArray;


}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
