var score;

var score_grade = function (score) {
    if (score === null || score === undefined || isNaN(score)) {
        console.log(`${score} is a invalid score`);

    } else {

        if (score >= 0 && score <= 100) {
            console.log(`Valid score`);

            if (score < 35) {
                console.log(`Unfortunately you are failed`);
            } else {
                console.log(`Your score is ${score}`);
                console.log(`Congrats you are passed`);

                if (score >= 35 && score < 60) {
                    console.log(`Your grade is C`);
                }
                if (score >= 60 && score < 75) {
                    console.log(`Your grade is B`);
                }
                if (score >= 75 && score < 90) {
                    console.log(`Your grade is A`);
                }
                if (score >= 90) {
                    console.log(`Your grade is A+`);
                }

            }
        }
    }
    /*else {
           console.log(`Please provide valid score`);*/
}


score_grade(45);
console.log(`--------------------------------------------------------`);
score_grade(null);
console.log(`--------------------------------------------------------`);
score_grade(90);
console.log(`--------------------------------------------------------`);
score_grade(34);
console.log(`--------------------------------------------------------`);
score_grade(undefined);
console.log(`--------------------------------------------------------`);
score_grade(0);
console.log(`--------------------------------------------------------`);
score_grade(67);
console.log(`--------------------------------------------------------`);
score_grade(NaN);
console.log(`--------------------------------------------------------`);

/* if(score === null && score === undefined && score === NaN) {
     console.log(`Invalid Score`);
 } else {
     if(score >= 0 && score <= 100)
     {
     if(score < 35) {
         console.log(`Your score is ${score} `);
         console.log(`Unfortunately you are failed`);
     }
     if(score >= 35)
     {
         console.log(`Your score is ${score} `);
         console.log(`Congratulations ! You are Passed`);
         
     }
     if(score >= 35 && score < 60)
     {
         console.log(`Your score is ${score} `);
         console.log(`Congratulations ! You are Passed`);
         console.log(`The Grade is C`);
     }
     if(score >= 60 && score < 75)
     {
         console.log(`Your score is ${score} `);
         console.log(`Congratulations ! You are Passed`);
         console.log(`The Grade is B`);
     }
     if(score >= 75 && score < 90)
     {
         console.log(`Your score is ${score} `);
         console.log(`Congratulations ! You are Passed`);
         console.log(`The Grade is A`);
     }
     if(score >= 90 && score < 100)
     {
         console.log(`Your score is ${score} `);
         console.log(`Congratulations ! You are Passed`);
         console.log(`The Grade is A+`);
     }
 }

 */
