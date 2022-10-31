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

const axis_bank =  new Bank("Axis Bank", "Pune", 400000186754, "AXIS0001", "8%");
const sbi_bank =  new Bank("SBI Bank", "Mumbai", 234563456374, "SBI0023", "5%");
const icici_bank =  new Bank("ICICI Bank", "Aurangabad", 345678847562, "ICICI0001", "4%");
const kotak_bank =  new Bank("KOTAK Bank", "Aundh", 453212874444, "KOTAK0001", "6%");
const hdfc_bank =  new Bank("HDFC Bank", "Sangvi", 098765578454, "HDFC0001", "9%");
const punjab_bank =  new Bank("PUNJAB Bank", "Hinjewadi", 345678186754, "PUNJ0001", "8%");

//console.log(`Objects : `);
//console.log(`------------------------------------------------------------------`);

const array_bank = [axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,punjab_bank]

for (const bank of array_bank) {
   console.log(bank);
}

console.log(`1. Bank Name and Location from an Array: `);
console.log(`------------------------------------------------------------------`);
for (const element of array_bank) {
    console.log(`Bank Name : ${element.bank_name}     Location : ${element.location}`);
    }
    
console.log(`------------------------------------------------------------------`);

const set_bank = new Set();
set_bank.add(axis_bank);
set_bank.add(sbi_bank);
set_bank.add(icici_bank);
set_bank.add(kotak_bank);
set_bank.add(hdfc_bank);
set_bank.add(punjab_bank);

console.log(`2. Traverse of Bank Name and IFSC Code from an Set : `);
console.log(`------------------------------------------------------------------`);
for (const element1 of set_bank) {
    console.log(`Bank Name : ${element1.bank_name}    IFSC Code : ${element1.ifsc}`);

}
console.log(`------------------------------------------------------------------`);


const bank_map = new Map();
bank_map.set(400000186754, axis_bank);
bank_map.set(234563456374, sbi_bank);
bank_map.set(345678847562, icici_bank);
bank_map.set(453212874444, kotak_bank);
bank_map.set(098765578454, hdfc_bank);
bank_map.set(345678186754, punjab_bank);
//console.log(`------------------------------------------------------------------`);
console.log(bank_map);
console.log(`------------------------------------------------------------------`);

console.log(`3. Bank Details Using Map : `);
console.log(`------------------------------------------------------------------`);

const map_keys = bank_map.keys();
for (const key of map_keys) {
    const obj = bank_map.get(key);
    console.log(`Bank Name : ${obj.bank_name}  Location : ${obj.location} Account No.: ${obj.account_no} IFSC Code : ${obj.ifsc} Interest Rate : ${obj.interest_rate}`);
}

console.log(`------------------------------------------------------------------`);

// 4 From the array(Step A) find the object which has name → Kotak bank 

console.log("============ From the array(Step A) find the object which has name → KOTAK Bank =============");
console.log(`------------------------------------------------------------------`);

for (const bank of array_bank) {
    if(bank.bank_name=="KOTAK Bank") {
        console.log(`Bank Name : ${bank.bank_name}  Location : ${bank.location} Account No.: ${bank.account_no} IFSC Code : ${bank.ifsc} Interest Rate : ${bank.interest_rate}`);
    }
}
/*
const bank_map = new Map();
bank_map.set("Axis Bank", "Pune", 400000186754, "AXIS0001", "8%");
bank_map.set("SBI Bank", "Mumbai", 234563456374, "SBI0023", "5%");
bank_map.set("ICICI Bank", "Aurangabad", 345678847562, "ICICI0001", "4%");
bank_map.set("KOTAK Bank", "Aundh", 453212874444, "KOTAK0001", "6%");
bank_map.set("HDFC Bank", "Sangvi", 098765578454, "HDFC0001", "9%");
bank_map.set("PUNJAB Bank", "Hinjewadi", 345678186754, "AXIS0001", "8%");
*/
