class Student {
    roll_no
    std_name
    std_city
    constructor(roll_no, std_name, std_city) {
        this.roll_no = roll_no;
        this.std_name = std_name;
        this.std_city = std_city;
    }
}

const std_anil = new Student(11, "Anil", "Pune");
const std_sunil = new Student(22, "sunil", "Mumbai");
const std_radha = new Student(33, "Radha", "Bergen");
const std_shyam = new Student(55, "Shyam", "Karachi");
const std_jack = new Student(100, "Jack", "London");
const std_sunil_1 = new Student(22, "Sunil", "Mumbai");


const set_student = new Set();
set_student.add(std_anil);
set_student.add(std_sunil);
set_student.add(std_radha);
set_student.add(std_shyam);
set_student.add(std_jack);

console.log(set_student);
console.log(set_student.size);

const student_map = new Map();
student_map.set(11, std_anil);
student_map.set(22, std_sunil);
student_map.set(33, std_radha);
student_map.set(55, std_shyam);
//student_map.set(100, std_jack);
student_map.set(77, std_sunil_1);

//console.log(student_map.size);

const key_map = student_map.keys();
for (const key of key_map) {
    const obj = student_map.get(key);
    console.log(obj);
}