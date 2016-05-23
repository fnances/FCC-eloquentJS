//chessBoard

var chessBoard = '',
    hash = '',
    space = "\n",
    height = 8,
    width = 4;

  for( var i = 1 ; i <= height ; i++){
    if(i === 1) chessBoard += space;
    if( i % 2 === 0 ) hash = "# ";
    else hash = " #";


    for(var j = 1 ; j <= width ; j++){

      chessBoard += hash;

    }

    chessBoard += space;

  }

console.log(chessBoard);
