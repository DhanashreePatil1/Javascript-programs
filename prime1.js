console.log(`Assignment : `);
console.log(`--------------------------------------------------------------------`);
function swap_with_third_arg(num1, num2) {
    let temp = num1;
    console.log(`Before Swapping with third variable:`);
    console.log(num1, num2);
    num1 = num2;
    num2 = temp;
    console.log(`After Swapping with third variable:`);
    console.log(num1, num2);
}
swap_with_third_arg(100, 200);
console.log(`------------------------------------------------------------------`);
swap_with_third_arg(40, 50);
console.log(`------------------------------------------------------------------`);


function swap_without_third_arg(num1, num2) {
    console.log(`Before Swapping without third variable:`);
    console.log(num1, num2);
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    console.log(`After Swapping without third variable:`);
    console.log(num1, num2);
}

swap_without_third_arg(100, 200);
console.log(`------------------------------------------------------------------`);
swap_without_third_arg(40, 50);