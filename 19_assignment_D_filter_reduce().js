    class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance",47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_emps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("Assignment D : Using filter() and reduce() ");
console.log("===============================================================================================================");;
console.log("1. Find all the employees from 'Wipro' Company : ");

const all_emp_wipro = array_emps.filter((employee) => {
    return employee.emp_company =="Wipro";
});
all_emp_wipro.forEach((employee) => {
    console.log(employee);
   //console.log(`Emp_ID: ${employee.emp_id}, Name: ${employee.emp_name}, Department: ${employee.emp_dept}, Salary: ${employee.emp_salary}, Company: ${employee.emp_company}`);
});

console.log("===============================================================================================================");;
console.log("2. Find all the employees from 'IT' or 'HR' dept : ");

const all_emp_dept = array_emps.filter((employee) => {
    return employee.emp_dept =="IT" || employee.emp_dept == "HR";
});
all_emp_dept.forEach((employee) => {
    console.log(employee);
});

console.log("===============================================================================================================");;
console.log("3. Find all the employees whose emp_id are greater than 50 : ");

const emp_id_details = array_emps.filter((employee) => {
    return employee.emp_id > 50;
});
emp_id_details.forEach((employee) => {
    console.log(employee);
});

console.log("===============================================================================================================");;
console.log("4. Find all the employees whose name startWith letter 'A' or 'V' or 'M' : ");
const name_starts = array_emps.filter((employee) => {
    if( employee.emp_name.startsWith('A') || employee.emp_name.startsWith('V') || employee.emp_name.startsWith('M')) {
        console.log(employee);
    }
});
/*name_starts.forEach((employee) => {
    console.log(employee);
});*/

console.log("===============================================================================================================");;
console.log("5. Find the average salary of the employee for all the department : ");

let sum_of_salary = 0;
array_emps.forEach((employee) => {
   sum_of_salary = sum_of_salary +employee.emp_salary;
});
//console.log(sum_of_salary);

let average_employees_salary =0;
average_employees_salary = array_emps.reduce( (employee)=> {
    return sum_of_salary / array_emps.length;
},0);
console.log(average_employees_salary);

console.log("===============================================================================================================");;
console.log("6. Find the average salary for 'IT' department : ");

const sum1 = array_emps.filter((employee) => employee.emp_dept=="IT") 
const average_sal = sum1.reduce((average, employee) => {
    return average = average + employee.emp_salary / sum1.length;
},0)
console.log(average_sal);


/*
const IT=array_emps.filter((element) => element.emp_dept=="IT")
 const s=IT.reduce((p,element) =>
 {
   return p=p+element.emp_salary/IT.length
 },0)

 console.log(`Average salary of IT department employee is :${s}`);
 */