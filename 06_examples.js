function gender_check(gender) { // var gender = Male 
    if(gender === "Male") {
      console.log(`Your are Man, Gender ${gender} `);
    }
    if(gender === "Female") {
        console.log(`Your are Woman, Gender ${gender} `);   
    }
    if(gender === "Others") {
        console.log(`Your are Transgender, Gender ${gender} `);    
    }

    if(gender != "Male" && gender != "Female" && gender !="Others") { // gender = "Male"
        console.log(`Invalid gender ${gender}`);
    }
}
gender_check("Male");
gender_check("animal");
gender_check("Female");
gender_check("Others");
gender_check("bird");
console.log('----------------------------------------------------------------');

var check_even = function(my_number) {
    if(my_number === null || my_number === undefined) {
        console.log(`Invalid input ${my_number}`);
    } else {
        if(my_number%2 == 0){
            console.log(`Given number is even ${my_number}`);
        }
    }
}
check_even(40);
check_even(null);
check_even(undefined);
console.log('----------------------------------------------------------------');

var voting_eligibility  = function(age) {
    if(age >= 18){
        console.log(`Congrats you are eligible for voting, Age ${age} `)
    } else {
        console.log(`Sorry not eligible for voting, Age ${age} `)
    }
}
voting_eligibility(23);
voting_eligibility(17);
voting_eligibility(2);
voting_eligibility(11);