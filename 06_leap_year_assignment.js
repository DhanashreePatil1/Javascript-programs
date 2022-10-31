var leap_year;

console.log(`Assignment 2:`);
console.log(`-------------------------------------------`);

var result = function check_leap_year(leap_year) {
    if (typeof (leap_year) === 'number') {
        console.log(`${leap_year} This is Valid Input`);
        if (leap_year % 4 == 0 && leap_year % 100 != 0 || leap_year % 400 == 0) {
            console.log(`${leap_year} This is Leap Year`);

        } else {
            console.log(`${leap_year} This is not Leap Year`);
        }
    } else {
        console.log(`${leap_year} This is Invalid Input`);
    }
}
result(2020);
console.log(`-------------------------------------------`);
result(1999);
console.log(`-------------------------------------------`);
result(1600);
console.log(`-------------------------------------------`);
result(2022);
console.log(`-------------------------------------------`);
result(1945);
console.log(`-------------------------------------------`);
result(null);
console.log(`-------------------------------------------`);
result("Twenty Twenty");
console.log(`-------------------------------------------`);
result(undefined);
console.log(`-------------------------------------------`);
result(NaN);
console.log(`-------------------------------------------`);
result(1750);
console.log(`-------------------------------------------`);