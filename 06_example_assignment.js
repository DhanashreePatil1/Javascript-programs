console.log(`-----------------------------------------------------------------------`);
console.log(`Question 1 :`);

var voting_eligibility = function (age) {
    if (age == null || age == undefined) {
        console.log(`${age} This age is invalid`);
    } else {
        if (age >= 18) {
            console.log(`${age} Congrates ! You are eligible for Voting`);
        } else {
            console.log(`${age} Sorry, You are not eligible for Voting`);
        }
    }
}

voting_eligibility(45);
voting_eligibility(undefined);
voting_eligibility(17);
voting_eligibility(8);
voting_eligibility(20);
voting_eligibility(null);
console.log(`-----------------------------------------------------------------------`)
console.log(`Question 2 :`);

var gender;
var check_gender = function (gender) {

    if (gender === "Male") {
        console.log(`You are Man, Gender is: ${gender}`);
    }
    if (gender === "Female") {
        console.log(`You are Woman, Gender is: ${gender}`);
    }
    if (gender === "Others") {
        console.log(`You are Transgender, Gender is: ${gender}`);
    }
    if (gender != "Male" && gender != "Female" && gender != "Others") {
        console.log(`${gender} is a Invalid gender`);
    }
}
check_gender("Male");
check_gender("Others");
check_gender("Female");
check_gender(undefined);
check_gender(null);
console.log(`-----------------------------------------------------------------------`)
console.log(`Question 3 :`);

var number;
var even_odd = function (number) {
        if(number === null || number === undefined) {
            console.log(`${number} is Invalid input `);
        } else {
            if(number%2 == 0){
                console.log(`${number} number is Even `);
            } else {
                console.log(`${number} number is Odd`);
            }
        }
    }
    even_odd(60);
    even_odd(51);
    even_odd(0);
    even_odd(5);
    even_odd(40);
    even_odd(NaN);
    even_odd(undefined);
    even_odd(null);

