function uniteUnique(arr) {
 var args = Array.from(arguments);
   args = args.reduce( function (prev, curr) {

     return prev.concat(curr);
   });

  args = args.filter( function (value, index, arr){
    var indx = arr.indexOf(value, 0);

    if(arr.indexOf(value, index) === indx)
      return value;
  });

  return args;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
