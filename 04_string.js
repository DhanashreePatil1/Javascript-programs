var greet="Good Morning";
var char = greet.charAt(3);
console.log(char);

var fName="Chaitali";
var lName=" Kamble";
var fullName= fName.concat(lName);
console.log(fullName);

var position=greet.indexOf("M");
console.log(position);

var uppercase=greet.toLocaleUpperCase();
console.log(uppercase);

var message = "  Good evening     ";
 console.log("Before trim() " + message.length);

 var trimmedString = message.trim();

 console.log("After trim() " + trimmedString.length);

 var search = greet.search("Mor");
 console.log(search);

 // substring
 var slice = greet.slice(5,9);
 console.log(slice);

 // substring
 var substring = greet.substring(5,8);
 console.log(substring);

 greet = "Hello Good morning buddy";
 var words = greet.split(" ");
 console.log(words.length);