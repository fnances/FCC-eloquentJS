function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  newArr.sort();

 newArr = newArr.filter( function (value, index, array) {
   var indx = array.indexOf(value, 0);

   if((array[index] !== array[index+1])&&(array.indexOf(value, index ) === indx))
     return value;
    
 });
      return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
