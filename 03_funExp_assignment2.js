var ssc;
var hsc;
var gradution;
var candidate_name;
console.log(`Assignment 3:`);
console.log(`---------------------------------------------------------------------`);
console.log(`Tcs Interview eligibility check`);
console.log(`---------------------------------------------------------------------`);

var result = function(graduation,hsc,ssc,candidate_name) {
var interview = graduation >= 70 || hsc >= 80 || ssc >= 90 ? `Congrates!, ${candidate_name} You are eligible for TCS Interview`: `Unfortunately, you are not eligible for Inetrview`;
console.log(`Name: ${candidate_name}, Graduation score ${graduation}, HSC Score: ${hsc}, SSC score: ${ssc}`);  
console.log(`${interview}`);
}

result(80,86,90,"Chaitali");
console.log(`---------------------------------------------------------------------`);
result(70,65,55,"Prajakta");
console.log(`---------------------------------------------------------------------`);
result(60,79,88,"Pooja");
console.log(`---------------------------------------------------------------------`);
