console.log("Assignment 1.1 =>");
simple_function();
function simple_function() {
    console.log("Today I am Learning JavaScript");
}

simple_function1();
function simple_function1() {

    console.log("I love JavaScript");
}
console.log("----------------------------------------------------");
console.log("Assignment 1.2 =>");
var firstname="Chaitali";
var lastname=" Kamble";
concat_str(firstname,lastname);


function concat_str(firstname, lastname) {
    var result = firstname + lastname;
    console.log("Concat String :", result);
   // console.log("Chaitali" + "Kamble");
}
console.log("----------------------------------------------------");
console.log("Assignment 1.3 =>");
var val1;
var val2;

swap_values("Virat", "Anushka");
console.log("----------------------------------------------------");
swap_values(1000, 2000);

function swap_values(val1, val2) {
    console.log("Before Swapping : ",val1,val2);
    var temp=val1;
    val1=val2;
    val2=temp;
    console.log("After Swapping  : ",val1,val2);
}
console.log("----------------------------------------------------");
console.log("Assignment 1.4 =>");
var num1;
var num2;
var num3;
var sum;

add_three_numbers(10.23, 600, 40);
console.log("Addition of Three Numbers is : ",sum);

add_three_numbers("Hello,"," Good"," Morning !");
console.log("Addition of Three Strings is : ",sum);

function add_three_numbers(num1,num2,num3)
{
  sum = num1 + num2 + num3;
}
