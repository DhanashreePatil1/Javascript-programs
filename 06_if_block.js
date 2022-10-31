var my_number=10;
if(my_number == 10) {
    console.log(`My lucky number`);
}

var age = 17;
if (age >= 21) {
    console.log(`Hey ${age} congrats your line is clear now`);
}else {
    console.log(`Sorry not eligible`);
}
console.log(`Operation done`);

// Grade design Function
function grade_design_new(score) {
    if (score >= 0 && score <= 100) { // true
        console.log(`Valid score`);
        if (score < 35) { // 34 < 35
            console.log(`Unfortunately you are failed`);
        } 
        else {
            console.log(`Congrats you are passed`);
            if(score <60 ){
                console.log(`Your grade is C`);
            } 
            if (score>60 && score < 80) {
                console.log(`Your grade is B`); 
            }
            if (score>=80 && score <90) {
                console.log(`Your grade is A`); 
            } 
            if( score>=90 ){
                console.log(`Your grade is A+`);  
            }
        }

    } else {
        console.log(`Please provide valid score`);

    }
}
grade_design_new(89);
// grade_design(-10);
// Grade design Function
function grade_design_new(score) {
    if (score >= 0 && score <= 100) { // true
        console.log(`Valid score`);
        if (score < 35) { // 34 < 35
            console.log(`Unfortunately you are failed`);
        } 
        else {
            console.log(`Congrats you are passed`);
            if(score <60 ){
                console.log(`Your grade is C`);
            } 
            if (score>60 && score < 80) {
                console.log(`Your grade is B`); 
            }
            if (score>=80 && score <90) {
                console.log(`Your grade is A`); 
            } 
            if( score>=90 ){
                console.log(`Your grade is A+`);  
            }
        }
    } else {
        console.log(`Please provide valid score`);
    }
}
grade_design_new(89);
// grade_design(-10);