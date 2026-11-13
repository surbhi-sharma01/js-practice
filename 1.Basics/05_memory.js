// Stack memory -> primitive datatypes 

let a = 1;
let b = a; // copy of 'a' is passed
b = 6;
console.log(a + " " + b);


// Heap memory -> non primitive datatypes 

let obj1 = {
    id : 987,
    name : "sushma"
};

let obj2 = obj1; // reference is passed

obj2.name = "priya";

console.log(obj1);