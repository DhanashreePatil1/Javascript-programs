function word_length_square(arg1) {
    var str_result=arg1.length * arg1.length;
    return str_result;

}

var str = word_length_square("JavaScript");
console.log(`The Length of word "JavaScript" is : ${str}`);

var str = word_length_square("Google");
console.log(`The Length of word "Google" is : ${str}`);

var str = word_length_square("Developer");
console.log(`The Length of word "Developer" is : ${str}`);
console.log(`--------------------------------------------------------------`);

var string1 = "I am Angular Developer";
console.log(`Before Reverse String : ${string1}`);
reverse_string();
function reverse_string()
{
    var rev= string1.split("").reverse().join("");
    console.log(`The Reverse String is : ${rev}`);
}
console.log(`--------------------------------------------------------------`);

length1();

function length1() {
console.log(`The Length of the string is : ${string1.length}`);

var words=string1.split(" ");
var word_counts=words.length;

console.log(`The total no. of words in string is : ${word_counts}`);

var divide_str=string1.length / word_counts;
console.log(`The Total length Divide by the total words : ${divide_str}`);

var multiply_str = string1.length * word_counts;
console.log(`The Total length Multiply by the total words: ${multiply_str}`);

}