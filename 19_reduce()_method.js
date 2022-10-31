const array_numbers = [20, 30, 4, 5, 11, 7, 8]; // ==> one_value

const sum =  array_numbers.reduce((currentTotal, value) => {
    return currentTotal + value;
}, 100);
console.log(sum);


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
const empMahi = new Employee(99,"Mahesh","HR",75000,"Infy");
 
const array_employees= [ empAnil, empRadha, empRishi, empSonali, empMonika, empVinay, empMahi ];

console.log("----------------------");
const array_emp_tcs =  array_employees.filter( employee =>  employee.emp_company=="TCS")
.map((employee)=> employee.emp_name);

console.log(array_emp_tcs);

const sum_employees_salary = array_employees.reduce( (current_total, employee)=> {
    return current_total+employee.emp_salary;
},0);
console.log(sum_employees_salary);