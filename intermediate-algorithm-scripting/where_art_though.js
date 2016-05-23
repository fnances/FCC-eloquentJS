function whereAreYou(collection, source) {

var arr = [];

  arr = collection.filter( function (value, index, array) {

    var condition = true;

    for(var prop in source){
      if((value.hasOwnProperty(prop))&&(value[prop] === source[prop]))
        condition = true;
      else condition = false;
    }

    if(condition) return value;

  });

  return arr;
}
whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
