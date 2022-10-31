console.log(`Assignment using Arrow Function :`);
console.log(`--------------------------------------------------------------------------------------------------`);
console.log("1. With no args and no return type ");
console.log(`----------------------------------------------`);

let display = () => {
    console.log('Good Morning, Today is Tuesday');
}
display();
console.log(`--------------------------------------------------------------------------------------------------`);

console.log("2. With 3 arguments and no return values : ");
console.log(`----------------------------------------------`);

let multiply =  (num1, num2, num3) => {
const multiply_num = num1 * num2 * num3;
console.log(`Multiplication of 3 Numbers is (${num1},${num2},${num3}) : ${multiply_num}`);
}

multiply(5, 5, 2);
multiply(10, 4, 10);

console.log(`--------------------------------------------------------------------------------------------------`);

const addition = (num1, num2, num3, num4, num5) => {
    return num1 + num2 + num3 + num4 + num5;
}
//addition(100, 100, 200, 349, 756);
console.log(`3.1 The Addition of 5 numbers is (100, 100, 200, 349, 756): ${addition(100, 100, 200, 349, 756)}`);
console.log(`--------------------------------------------------------------------------------------------------`);

console.log(`3.2 The Addition or Concat of string is :${addition(" I am", " Learning"," ES6"," features", " in JS")}`);
console.log(`--------------------------------------------------------------------------------------------------`);


