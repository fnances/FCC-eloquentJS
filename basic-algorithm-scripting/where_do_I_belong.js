function getIndexToIns(arr, num) {

  var newArray = arr;

  function compare(a,b){
    if(a>b) return 1;
    if(a<b) return -1;

    else return 0;
  }

  newArray.push(num);
  newArray.sort(compare);
  return newArray.indexOf(num);


}

getIndexToIns([40, 60], 50);
