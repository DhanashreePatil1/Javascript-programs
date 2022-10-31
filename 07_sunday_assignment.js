
console.log(`Assignment 1.1: `);
console.log(`-----------------------------------------------------`);
var string1 = "Hard work always pays back";
var string2 = "Soon I will be Angular IT Champ";



var count;

function count_spaces(str) {
    count = (str.split(" ").length - 1);
    console.log(`String is: ${str}`);
    console.log(`Count Space is : ${count}`);

}
count_spaces(string1);
console.log(`-----------------------------------------------------`);
count_spaces(string2);

console.log(`-----------------------------------------------------`);
console.log(`Assignment 1.2: `);
console.log(`-----------------------------------------------------`);

var str1 = "Hard work always pays back";
var str2 = "Soon I will be Angular IT Champ";

function reverse_string(str1) {
    var reverse1 = "";
    for (let index = str1.length - 1; index >= 0; index--) {
        reverse1 = reverse1 + str1.charAt(index);
    }
    console.log(`Reverse String is : ${reverse1}`);
}

console.log(`String is : ${str1}`);
reverse_string(str1);
reverse1 = "";
console.log(`-----------------------------------------------------`);
console.log(`String is : ${str2}`);
reverse_string(str2);

/*
function reverse_string1(str2) {
    var reverse2 = "";
    for (let index = str2.length - 1; index >= 0; index--) {
        reverse2 = reverse2 + str2.charAt(index);
    }
    console.log(`Reverse String is : ${reverse2}`);
}

console.log(`String is : ${str2}`);
reverse_string1(str2);
console.log(`-----------------------------------------------------`); */

// how to check prime number

function is_prime_number(check_prime) {
    for (let index =2; index<check_prime; index++){
        if(check_prime%index ==0){
            return false;
        }
    }
    return true;
    }

    console.log(`==============================================`);
    //program to find first 10 numbers
    console.log(`1st 10 prime numbers:->`);
    console.log(`-----------------------------------------------------`);

    let counter_prime =0;
    let index =2;
    while (counter_prime<=10){
        if(is_prime_number(index)){
            counter_prime++;
            console.log(index);
        }
        index++;
    }
    
    


/*let string1 = "Hard work always pays back";
let string2 = "Soon I will be Angular IT Champ";
let reveres_string = "";

function reverse_string(str) {
    for (let index = str.length - 1; index >= 0; index--) {
        reveres_string = reveres_string.concat(str.charAt(index));
    }
    console.log(reveres_string);
}
console.log(`String is : ${string1}`);
reverse_string(string1);
reveres_string = "";
console.log(`-----------------------------------------------------`);
console.log(`String is : ${string2}`);
reverse_string(string2);
console.log(`-----------------------------------------------------`);
*/
