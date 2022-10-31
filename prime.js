let string1 = "Hard work always pays back";
let string2 = "Soon I will be Angular IT Champ";
let reveres_string = "";

function reverse_string(str) {
    for (let index = str.length - 1; index >= 0; index--) {
        reveres_string = reveres_string.concat(str.charAt(index));
    }
    console.log(reveres_string);
}
console.log(`String is : ${string1}`);
reverse_string(string1);
reveres_string = "";
console.log(`-----------------------------------------------------`);
console.log(`String is : ${string2}`);
reverse_string(string2);
console.log(`-----------------------------------------------------`);