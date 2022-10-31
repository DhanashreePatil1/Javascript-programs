class Bank {
    bank_name
    location
    account_no
    ifsc
    interest_rate

    constructor(bank_name, location, account_no, ifsc, interest_rate) {
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }
}

const axis_bank =  new Bank("Axis", "Pune", 186754, "AXIS0001", "8%");
const sbi_bank =  new Bank("SBI", "Mumbai", 456374, "SBI0023", "5%");
const icici_bank =  new Bank("ICICI", "Aurangabad", 847562, "ICICI0001", "4%");
const kotak_bank =  new Bank("KOTAK", "Aundh", 874444, "KOTAK0001", "6%");
const hdfc_bank =  new Bank("HDFC", "Sangvi", 578454, "HDFC0001", "9%");
const punjab_bank =  new Bank("PUNJAB", "Hinjewadi", 186754, "AXIS0001", "8%");

console.log(`Objects : `);
console.log(`------------------------------------------------------------------`);
console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(punjab_bank);


const set_bank = new Set();
set_bank.add(axis_bank);
set_bank.add(sbi_bank);
set_bank.add(icici_bank);
set_bank.add(kotak_bank);
set_bank.add(hdfc_bank);
set_bank.add(punjab_bank);



const bank_map = new Map();
bank_map.set("Axis Bank", "Pune", 400000186754, "AXIS0001", "8%");
bank_map.set("SBI Bank", "Mumbai", 234563456374, "SBI0023", "5%");
bank_map.set("ICICI Bank", "Aurangabad", 345678847562, "ICICI0001", "4%");
bank_map.set("KOTAK Bank", "Aundh", 453212874444, "KOTAK0001", "6%");
bank_map.set("HDFC Bank", "Sangvi", 098765578454, "HDFC0001", "9%");
bank_map.set("PUNJAB Bank", "Hinjewadi", 345678186754, "AXIS0001", "8%");


console.log(`1. Bank Name and Location from an Array: `);
console.log(`------------------------------------------------------------------`);
for (const element of bank_map) {
console.log(`Bank Name : ${element[0]}     Location : ${element[1]}`);
}

console.log(`------------------------------------------------------------------`);

console.log(`2. Traverse of Bank Name and IFSC Code from an Array : `);
console.log(`------------------------------------------------------------------`);
for (const element1 of set_bank) {
    console.log(`Bank Name : ${element1.bank_name}    IFSC Code : ${element1.ifsc}`);

}
console.log(`------------------------------------------------------------------`);
console.log(bank_map);
console.log(`------------------------------------------------------------------`);


const key_map = bank_map.keys();
for (const keys of key_map) {
    const obj = bank_map.get(keys);
    console.log(obj.ifsc);
}