let num1=0;
let num2=1;
let num3;

console.log(`Fibonacci Series till 7th occurences: `);
function fibonacci_series() {
    for (let index = 0; index <= 7; index++) {
       console.log(num1); 
       num3 = num1 + num2;
       num1 = num2;
       num2 = num3;
       
    }
}
fibonacci_series();
