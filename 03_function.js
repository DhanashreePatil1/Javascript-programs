function display()
{
    console.log("Today i am going to learn Function");
}
display();


function display_name(my_name, age, pin_code, city) { 
    console.log(my_name,age,pin_code,city);
}
display_name("Chaitali Kamble", 30, 1234567, "Pune");


var age=30;
var first_name="chaitali";
var last_name="kamble";
var isMarried=false;
var pincode=411027;

type_check(age);
type_check(first_name);
type_check(last_name);
type_check(isMarried);
type_check(pincode);

function type_check(value)
{
    var data_type=typeof value;
    console.log("Type of",value,data_type);

}
var message=log_message();
console.log(message);

function log_message()
{
return "hello";
}

var add_return = add(10, 20);
console.log("Addition of number is ", add_return);

var add_result = add("Good", " Morning");
console.log(add_result);

console.log("Good" + " Afternoon");

function add(agr_1, arg_2) { // arg_1 = 10, arg_2 = 20
   var result = agr_1 + arg_2;
   return result;
}



fun1();
function fun1() {
    console.log("Hello");
}

fun2(20, 30);
function fun2(v1, v2) {
    console.log(v1,v2);

}

var result_2=fun3();
function fun3(){
    return "Hello";
}

var result_1= fun4(70, 80);
function fun4(v4, v5) {
    return "30";
}