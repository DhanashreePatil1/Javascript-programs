class Vehicle {
    vehicle_brand
    vehicle_model
    vehicle_variant
    vehicle_color

    constructor(vehicle_brand, vehicle_model, vehicle_variant, vehicle_color) {
        this.vehicle_brand = vehicle_brand;
        this.vehicle_model = vehicle_model;
        this.vehicle_variant = vehicle_variant;
        this.vehicle_color = vehicle_color;
    }

}
console.log(`Five Objects of Vehicle: `);
let vehicle_tata = new Vehicle("TATA", "Tiago", "CNG", "Black");
console.log(vehicle_tata);

let vehicle_tata1 = new Vehicle("TATA", "Safari", "CNG", "Red");
console.log(vehicle_tata1);

let vehicle_mahindra = new Vehicle("Mahindra", "scorpio", "Petrol", "Grey");
console.log(vehicle_mahindra);

let vehicle_maruti = new Vehicle("Maruti Suzuki", "Wagon R", "CNG", "White");
console.log(vehicle_maruti);

let vehicle_maruti1 = new Vehicle("Maruti Suzuki", "Swift", "CNG", "Black");
console.log(vehicle_maruti1);



class College {
    college_name
    college_address
    college_specialization
    total_department

    constructor(college_name, college_address, college_specialization, total_department) {
        this.college_name = college_name;
        this.college_address = college_address;
        this.college_specialization = college_specialization;
        this.total_department = total_department;
    }


}

console.log(`Four Objects for College : `);
let college_mcoe = new College("Modern Collegeof Engineering", "Pune", "Engineering", 8);
console.log(college_mcoe);

let college_gholap = new College("Baburaoji Gholap College", "Sangvi", "Arts, Commerce and Science", 3);
console.log(college_gholap);

let college_shivaji = new College("Shivaji College", "Aundh", "Arts, Commerce and Science", 6);
console.log(college_shivaji);

let college_sp = new College("SP College", "Pune", "Interior Design", 5);
console.log(college_sp);

let college_location = {
    Modern : "Pune",
    Br_gholap : "Sangvi",
    Shivaji : "Aundh",
    SP : "Pune",
}
console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`Auestion 3.1`);
console.log(`---------------------------------------------------------`);
function traverse_object(college_location) {
    for (const key in college_location) {
        if (Object.hasOwnProperty.call(college_location, key)) {
            const element = college_location[key];
           
            console.log(`The College ${key} is located in ${element}`);

        }
    }
}
traverse_object(college_location);

    console.log(`----------------------------------------------------`);
    for (const key in college_mcoe) {
        if (Object.hasOwnProperty.call(college_mcoe, key)) {
            const element = college_mcoe[key];
            console.log(`${key}:- ${element}`);
            
        }
    }

    console.log(`-----------------------------------------------------------------`);
    for (const key in college_gholap) {
        if (Object.hasOwnProperty.call(college_gholap, key)) {
            const element = college_gholap[key];
            console.log(`${key}:- ${element}`);
            
        }
    }

    console.log(`-----------------------------------------------------------------`);
    for (const key in college_shivaji) {
        if (Object.hasOwnProperty.call(college_shivaji, key)) {
            const element = college_shivaji[key];
            console.log(`${key}:- ${element}`);
            
        }
    }

    console.log(`-----------------------------------------------------------------`);
    for (const key in college_sp) {
        if (Object.hasOwnProperty.call(college_sp, key)) {
            const element = college_sp[key];
            console.log(`${key}:- ${element}`);
            
        }
    }



