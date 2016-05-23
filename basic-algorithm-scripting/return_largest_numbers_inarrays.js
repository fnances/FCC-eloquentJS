
function largestOfFour(arr) {

  function compare(a, b){
    if(a>b)
      return 1;
    if(a < b)
      return -1;

      return 0;
  }

  arr.forEach( function(el, index, array){
    var length = el.length;
    el.sort(compare);
//     array.splice(index, 1, el[length - 1]);
    array[index] = el[length - 1];
  });

  return arr;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
