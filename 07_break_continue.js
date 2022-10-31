// break statement
var index= 0;
while (index<=10) {
    if(index==5) {
        break;
    }
    console.log(index); // 0 1 2 3 4 
    index++;
}
console.log("After loop");

// continue statement


for (let index = 0; index <= 5; index++) {
    console.log("Before continue", index); 
    if(index == 2) {
        continue;
    }
    console.log("After continue", index);
    
}
console.log("After for loop");


/*var my_Name="Chaitali";
my_Name="Chaitali Kamble";
console.log(my_Name); */