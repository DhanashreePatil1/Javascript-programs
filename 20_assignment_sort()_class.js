class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const empAnil = new Employee(22,"Anil","IT",50000,"TCS");
const empRadha = new Employee(33,"Radha","HR",74000,"Wipro");
const empRishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const empSonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const empMonika = new Employee(77,"Monika","IT",40000,"Wipro");
const empVinay = new Employee(88,"Vinayak","IT",75000,"TCS");
const empMahi = new Employee(99,"Mahesh","HR",85000,"Infy");
 
const array_employees= [ empAnil, empRadha, empRishi, empSonali, empMonika, empVinay, empMahi ];
console.log("Assignment B :");
console.log("==============================================================================================");
console.log("1. Sort the Array_employees in ascending order of employee ID's : ");
array_employees.sort((employee1, employee2)=>{
    return employee1.emp_id > employee2.emp_id ? 1 : -1;
});
array_employees.forEach((employee)=>{
    console.log(`Emp_ID : ${employee.emp_id}, Name : ${employee.emp_name}, Department : ${employee.emp_dept}`);
});
//console.log(`${array_employees.emp_id}`);

console.log("==============================================================================================");
console.log("2. Sort the array_employees in ascending order of employee department : ");

array_employees.sort((employee1, employee2)=>{
    return employee1.emp_dept > employee2.emp_dept ? 1 : -1;
});
array_employees.forEach((employee)=>{
    console.log(`Emp_ID : ${employee.emp_id}, Department : ${employee.emp_dept}, Company : ${employee.emp_company} `);
});

console.log("==============================================================================================");
console.log("3. Sort the array_employees in decending order of employee salary : ");

array_employees.sort((employee1, employee2)=>{
    return employee1.emp_salary > employee2.emp_salary ? -1 : 1;
});
array_employees.forEach((employee)=>{
    console.log(`Name : ${employee.emp_name}, Salary : ${employee.emp_salary}, Company : ${employee.emp_company} `);
});

console.log("==============================================================================================");
console.log("4. Sort the array_employees in ascending order of employee name : ");

array_employees.sort((employee1, employee2)=>{
    return employee1.emp_company > employee2.emp_company ? 1 : -1;
});
array_employees.forEach((employee)=>{
    console.log(`Company : ${employee.emp_company}, Emp_id : ${employee.emp_id}, Name : ${employee.emp_name}, Salary : ${employee.emp_salary}, Salary : ${employee.emp_salary}, Department : ${employee.emp_dept} `);
});
