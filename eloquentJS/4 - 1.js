function range(start, end, step){
  var range = [],
      decrement = arguments[2] || 1 ,
      counter = 0,
      countTo = decrement === arguments[2] ? end/step : start;

  for(var i = end ; i>= countTo ; i-- ){
    range[counter] = end;
    end -= decrement;
    counter++;
  }

  return range;
}

console.log(range(1, 10 ));

function sum(array){
  var sum = 0;

  for(var i = 0 ; i < array.length ; i++){
    sum += array[i];
  }

  return sum;
}

console.log(sum(range(1,10)));
