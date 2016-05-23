function reverseString(str) {

   var separator = '',
       finalString;

       finalString = str.split(separator);
       return finalString.reverse().join(separator);


}

reverseString("hello");
