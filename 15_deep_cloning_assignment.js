const array_nums = [20, 3, 4, 56, 90, 400, 49];

console.log(array_nums);
let array_copy = [...array_nums];
const splice_array_num = array_nums.splice(4, 0, 55, 66); 
console.log(`1. Shallow Clone, Updated clone array with values 55, 66`); 
console.log(`---------------------------------------------------------------------------------------------------------------`);    // shallow copy
console.log(`Original Array : ${array_nums}`);
console.log(`Clone Array : ${array_copy}`);


console.log("================================================================================================================");
console.log("2. Deep Clone using Spread Operator : ");
let array_deep_copy = [...array_nums]; 
console.log(array_deep_copy);
console.log(`----------------------------------------------------------------------------------------------------------------`);
array_nums.push(10, 25);
console.log(`2.1 Original Array with values 10, 25 : ${array_nums}`);
console.log(`After Clone Array : ${array_deep_copy}`);


console.log("================================================================================================================");

const array_even = [2, 30, 14, 8];
console.log(array_even);
const combined_array = array_nums.concat(array_even);
console.log(`3. Concat Array using Spread Operator : `);
const combined_spread = [...combined_array];
console.log(combined_spread);
console.log("================================================================================================================");

const employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month : "40.0000INR",
        aug_month : "50.0000INR",
        jun_month : "65.0000INR"
    },

    address : {
        locality : {
            colony : "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles: ["+91 8600 3456 88", "1800 4567 32", "+91-9096 5678 77"]

}
console.log(`4. Employee Details : `);
console.log(employee_info);
console.log("================================================================================================================");

console.log(`5.1 Employee Address :`);
console.log( employee_info.address);
console.log(`----------------------------------------------------------------------------------------------------------------`);
console.log(`5.2 Employee Mobile Numbers :`);
console.log(employee_info.mobiles);
console.log("================================================================================================================");


const deep_address = {...employee_info};
console.log(`6.1 Original Employee Address : `);
console.log(employee_info.address.locality);
console.log(deep_address.address.locality);

employee_info.address.locality.street = "Jaymala Nagar, 411027";

console.log(`After Cloning Employee Address : `);
console.log(employee_info.address.locality);
console.log(deep_address.address.locality);
console.log(`----------------------------------------------------------------------------------------------------------------`);

console.log(`6.2 Original Employee Mobile No.: `);
console.log(employee_info.mobiles);
employee_info.mobiles = ["+91 8830 159 429","1800 4567 32", "+91-9096 5678 77"]

console.log(`After Update Employee Mobile No.: `);
console.log(employee_info.mobiles);
console.log("================================================================================================================");

console.log(`7. Before Updating Details using JSON.stringfy(): `);
console.log(employee_info.salary);
console.log(employee_info.address);

const emp_info = JSON.parse(JSON.stringify(employee_info))
emp_info.salary.july_month = "80.0000INR";


emp_info.address.country = "United Kingdom";
console.log(`After Updating Details JSON.stringfy() : `);
console.log(emp_info.salary);
console.log(emp_info.address);

console.log("================================================================================================================");
