let teacher = {
    first_name : "Sapna",
    last_name : "Kamble",
    mobile : "8830 159 429",
    subject: "Angular JS ",
    email : "kamblesapna081995@gmail.com",
    position: "Teacher",
    college_name: "Modern College",

    degrees: {
        engineering: "CSC",
        phd: "Adv Computing",
        mba : "HR",
        course : "Angular JS Development",

        concat_degrees: function() {
            return `Teachers Degrees are : ${this.engineering} ${this.phd} ${this.mba} ${this.course}`;
        }
    },

    certificates: {
        certificate_1: "Hacker Rank Particiption",
        certificate_2: "Certificate in IFE Course",
        certificate_3: "Certicate in Adv Programming"
    },
    
    

    
    
}

console.log(`Assignment : `);
console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`Creating Object Teacher :`);
console.log(teacher.first_name);
console.log(teacher.last_name);
console.log(teacher.college_name);
console.log(teacher.subject);
console.log(teacher.email);
console.log(teacher);

console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`Nested Object 'degrees' : `);
console.log(teacher.degrees.engineering);
console.log(teacher.degrees.phd);
console.log(teacher.degrees.mba);
console.log(teacher.degrees.course);
console.log(teacher.degrees);

console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`Nested Object 'certificates' : `);
console.log(teacher.certificates.certificate_1);
console.log(teacher.certificates.certificate_2);
console.log(teacher.certificates.certificate_3);
console.log(teacher.certificates);

console.log(`------------------------------------------------------------------------------------------------------------------------`);
let concat_degrees= teacher.degrees.concat_degrees();
console.log(`Total Degrees:`);
console.log(concat_degrees); 

console.log(`------------------------------------------------------------------------------------------------------------------------`);
teacher.graduation = "MBA HR";         //added
console.log(`Added New Property:`);
console.log(`Graduation: ${teacher.graduation}`);

console.log(`------------------------------------------------------------------------------------------------------------------------`);
teacher.college_name = "COEP College";   // updating
console.log(`Modify Property:`);
console.log(teacher.college_name);

console.log(`------------------------------------------------------------------------------------------------------------------------`);
delete teacher.certificates.certificate_2; // deleting
console.log(`Delete one Certificate: `);
console.log(teacher.certificates);

console.log(`------------------------------------------------------------------------------------------------------------------------`);
teacher.certificates.certificate_4 = "Adv Java Programmimg";
console.log(`Add New Certificates : `);
console.log(teacher.certificates.certificate_4);

console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`Nested Object Certificates : `);
console.log(teacher.certificates);