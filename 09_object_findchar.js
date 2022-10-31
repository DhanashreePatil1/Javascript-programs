let string1 = "I am Learning JavaScript";
let string2 = "My favourite movie is laggan";
let result=0;
function count_char(str) {

for (let index = 0; index < str.length; index++) {
    let res=str.charAt(index);

    if(res == 'a' || res == 'A') {
        result++;
    }
    }
    return result;
}

console.log(`Assignment : `);
console.log(`-----------------------------------------------------`);
console.log(`String 1: ${string1}`);
let str1 = count_char(string1);
console.log(`Total number of 'a' in given string : ${str1}`);
console.log(`-----------------------------------------------------`);

result=0;
console.log(`String 2: ${string2}`);
let str2 = count_char(string2);
console.log(`Total number of 'a' in given string : ${str2}`);
