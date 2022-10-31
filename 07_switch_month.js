console.log(`Question 1:  `);
console.log(`The Month Names are as follows :  `);
console.log(`===========================================`)
var month_check = function (month) {
    switch (month) {
        case 1:
            console.log(`January`);
            break;
        case 2:
            console.log(`February`);
            break;
        case 3:
            console.log(`March`);
            break;
        case 4:
            console.log(`April`);
            break;
        case 5:
            console.log(`May`);
            break;
        case 6:
            console.log(`June`);
            break;
        case 7:
            console.log(`July`);
            break;
        case 8:
            console.log(`August`);
            break;
        case 9:
            console.log(`September`);
            break;
        case 10:
            console.log(`October`);
            break;
        case 11:
            console.log(`November`);
            break;
        case 12:
            console.log(`December`);
            break;
        default:
            console.log(`Invalid Input`);
            break;
    }
}
month_check(1);
month_check(2);
month_check(3);
month_check(4);
month_check(5);
month_check(6);
month_check(7);
month_check(8);
month_check(9);
month_check(10);
month_check(11);
month_check(12);

console.log(`----------------------------------------`);
console.log(`Question 2:  `);
console.log(`Without break statement :`);
console.log(`========================================`);

var gender = function (gender) {
    switch (gender) {
        case "Male":
            console.log(`You are Man`);

        case "Female":
            console.log(`You are Woman`);
            break;
        case "Others":
            console.log(`You are Transgender`);
            break;

        default:
            console.log(`Invalid Input`);
            break;
    }
}

gender("Male");
