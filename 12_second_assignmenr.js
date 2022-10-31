const array_numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(`--------------------------------------------------------------`);
console.log(array_numbers);
//console.log();
const array_length = array_numbers.length;
console.log(`1. Total Number of Array Element : ${array_length}`);
console.log(`The Length of the Array: ${array_numbers.length-1}`);

console.log(`--------------------------------------------------------------`);
const first_element = array_numbers[0];
const last_element = array_numbers[array_numbers.length - 1];
console.log(`2. First Element of Array : ${first_element}`);
console.log(`Last Element of Array : ${last_element}`);

console.log(`--------------------------------------------------------------`);
const third_last = array_numbers[array_numbers.length - 3];
console.log(`3. Third Last Element : ${third_last}`);

console.log(`--------------------------------------------------------------`);
console.log(`4. End To start numbers from an Array :`);
for (let index = array_numbers.length - 1; index >= 0; index--) {
    const element = array_numbers[index];
    console.log(`${element}`);

}

console.log(`--------------------------------------------------------------`);
console.log(`5. All Even Numbers from an Array :`);
for (const element of array_numbers) {
    if (element % 2 == 0) {
        console.log(`${element}`);
    }
}

console.log(`--------------------------------------------------------------`);
console.log(`6. All Odd Numbers from an Array :`);
for (const element of array_numbers) {
    if (element % 2 != 0) {
        console.log(`${element}`);
    }
}

console.log(`--------------------------------------------------------------`);
console.log(`7. Position of Even Numbers :`);
for (let index = 0; index < array_numbers.length; index++) {
    if (index % 2 == 0) {
        const element = array_numbers[index];

        console.log(element);
    }

}

console.log(`--------------------------------------------------------------`);
console.log(`8. Position of Odd Numbers :`);
for (let index = 0; index < array_numbers.length; index++) {
    if (index % 2 != 0) {
        const element = array_numbers[index];

        console.log(element);
    }

}

console.log(`--------------------------------------------------------------`);
let sum = 0;
for (let index = 0; index < array_numbers.length; index++) {
    sum += array_numbers[index];
}
console.log(`9. Sum of all elements is :- ${sum}`);

console.log(`--------------------------------------------------------------`);

console.log(`10.Prime Numbers`);

for (const element of array_numbers) {
    let isPrime = prime_numbers(element);
    if(isPrime) {
        console.log(element);
    }
}

function prime_numbers(prime) {
    for (let index = 2; index < prime; index++) {
        if(prime % index == 0) {
            return false;
        }
        
    }
    return true;
}
/*let prime = [];
function isPrime(item) {
    let identifier = item / 2;
      for (let j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { 
        return false;
       } 
     }
     return true;
}
for (let index = 0; index < array_numbers.length; index++) {
  if (isPrime(array_numbers[index])) {
      prime.push(array_numbers[index])
  }
}
console.log(`10. Prime Numbers :`);
console.log(`${prime}`); */


    console.log(`--------------------------------------------------------------`);

    console.log(`11. Numbers are multiple of 5 : `);
    for (let index = 0; index < array_numbers.length; index++) {
        if(array_numbers[index] % 5 == 0) {
            const element = array_numbers[index];
            console.log(element);
        }
       
        
    }


console.log(`--------------------------------------------------------------`);

const element_1 = array_numbers.includes(115);
console.log(`12. Is Number 115 is available:  ${element_1}`);
console.log(`--------------------------------------------------------------`);

const element_2 = array_numbers.includes(23);
console.log(`13. Is Number 23 is available:  ${element_2}`);
/*
array_numbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ]
for (const element of array_numbers) {
    let isPrime = prime_number(element);
    if(isPrime) {
        console.log(element);
    }
}
function prime_number(prime) {
    for (let index = 2; index < prime; index++) {
        if(prime%index == 0 ) {
            return false;
        } 
    }
    return true;
}*/