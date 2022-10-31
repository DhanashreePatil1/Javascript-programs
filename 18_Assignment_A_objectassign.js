const bank_sbi = {
    bank_ifsc_code : "SBI0001846",
    branch : "Sangvi",
    city : "Pune",
    bank_manager : "Laxman Bahadur"
}
console.log("Assignment A : ");
console.log("===========================================================================================================");

console.log("1. Object of bank_sbi : ");
console.log(bank_sbi);
console.log("===========================================================================================================");

const bank_location = {
    street : "Anand Nagar",
    city : "Pune",
    pin_code : 411027
}
console.log("2. Object of bank_location : ");
console.log(bank_location);
console.log("===========================================================================================================");

console.log("3. Cloning of Objects : ");
const clone_bank_sbi = Object.assign({},bank_sbi);
console.log("Using Object.assign() : ");
console.log(clone_bank_sbi);
const clone_bank_location = Object.assign({},bank_location);
console.log(clone_bank_location);

console.log(`---------------------------------------------------------------------------------------------------------------`);
let spread_sbi = {...bank_sbi};
console.log("Using Spread operator : ");
console.log(spread_sbi);
let spread_location = {...bank_location};
console.log(spread_location);


console.log("===========================================================================================================");

console.log("4. Object rate of interest : ");

const rate_of_interest = {
    home_loan_interest : "6.50%",
    personal_loan_interest : "10.25%",
    due_interest : "3%"
}
console.log(rate_of_interest);

console.log("===========================================================================================================");

console.log("5. Merging of 3 objects : ");
const merged_obj =  Object.assign({}, bank_sbi, bank_location, rate_of_interest);
console.log(merged_obj);