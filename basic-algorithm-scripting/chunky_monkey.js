function chunkArrayInGroups(arr, size) {
 var finalArray = [],
     length = arr.length ;

 for(var i = 0 ; i < length ; i += size ){

   finalArray.push(arr.slice(i, i + size));
 }
  return finalArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
