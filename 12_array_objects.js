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
const std_sunil = new Student(22, "Sunil", "Mumbai");
const std_radha = new Student(33, "Radha", "Bergen");
const std_shyam = new Student(55, "Shyam", "Karachi");
const std_jack = new Student(100, "Jack", "London");

const std_array = [std_anil, std_sunil, std_radha, std_shyam, std_jack];

const std_ambani = new Student(777, "Ambani", "Mumbai");
std_array.push(std_ambani); // to add new student

const obj_0 = std_array[0];
console.log(`Accessing ${obj_0.roll_no}, ${obj_0.std_name}, ${obj_0.std_city}`);

for (const element of std_array) { // traverse array of object
    console.log(`${element.roll_no}, ${element.std_name}, ${element.std_city}`); 
}