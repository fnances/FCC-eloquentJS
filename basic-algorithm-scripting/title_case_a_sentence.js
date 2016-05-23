
function titleCase(str) {
 var word = str.toLowerCase().split(' ');

  word.forEach( function (el, index, array) {
   var finalWord = el.charAt(0).toUpperCase();
    array[index] = finalWord + el.slice(1);
  });


  return word.join(' ');
}

titleCase("I'm a little tea pot");
