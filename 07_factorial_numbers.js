// factrorial of a number 5!= 5*4*3*2*1
var result = 1;
for (let index = 1; index <= 5; index++) {
    result = index * result;
    //console.log(result);
}
console.log(result);
console.log(`--------------------------------------------`);

function factrorial(number) {
    var result = 1;
    for (let index = 1; index <= number; index++) {
        result = index * result;
        //console.log(result);
    }
    return result;

}
console.log(`Factorial number : ${factrorial(5)}`);
console.log(`Factorial number : ${factrorial(6)}`);

console.log(`--------------------------------------------`);

//Prime number

function prime_number(prime) {
    for (let index = 2; index < prime; index++) {
        if (prime % index == 0) {
            return "Not a Prime Number";
        }
    }
    return "Prime Number";
}

console.log(`Is 3 ${prime_number(3)}`);
console.log(`Is 4 ${prime_number(4)}`);
console.log(`Is 9  ${prime_number(9)}`);
console.log(`Is 20  ${prime_number(20)}`);