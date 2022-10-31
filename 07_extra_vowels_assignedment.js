console.log(`Assignment 1 :`);
console.log(`----------------------------------------------`);
//var str="I love JavaScript";
var str;

var index=0;
var count=0;

function count_vowels(str) {
    var strLength = str.length;
while (index < strLength) {

    let char = str.charAt(index);
    index++;
    
    if(char == "a" ||char == "A" || char == "e" ||char == "E" ||char == "i" 
    ||char == "I" ||char == "o" ||char == "O" ||char == "u" ||char == "U")
    {
    count=count+1;
    }
    
}
console.log(`Total vowels in "I Love JavaScript" is : ${count}`);
}
count_vowels("I love JavaScript");

/*let str = "I Love JavaScript";
let counter = 0;
for (let index = 0; index < str.length; index++) {
    let char = str.charAt(index);
    if (char == "a" || char == "A" || char == "e" || char == "E"|| 
        char == "i" || char == "I" || char == "o" || char == "O" || char == "u" || char == "U"){
            counter++;
        }
    
}
console.log(`Total vowels in "I Love JavaScript" is : ${counter}`); */