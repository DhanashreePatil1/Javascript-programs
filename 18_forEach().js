const array_numbers = [20, 30, 4, 5, 11, 7, 8];
for (let index = 0; index < array_numbers.length; index++) {
    // index = 1
    // 30
    const element = array_numbers[index];
    // console.log(element); 
}

array_numbers.forEach(function(element) {
     // console.log(element);
});

array_numbers.forEach((element, index) => {
    // console.log(element, index)
});

// Find out numbers greater than 10 from array [20, 30, 4, 5, 11, 7, 8]
array_numbers.forEach(element => {
    if(element>10){
        console.log(element);
    }
});