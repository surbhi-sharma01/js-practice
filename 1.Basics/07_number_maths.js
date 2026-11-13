// number object :
let number = new Number(20000);
console.log( typeof number.toString());
console.log(number.toFixed(2));
console.log(number.toLocaleString('en-In'));

// Math object 
console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-3));
console.log(Math.round(9.5));
console.log(Math.ceil(3.2));
console.log(Math.floor(3.2));

// random

console.log(Math.random()); // between 0(inclusive) and 1(exclusive)
console.log( Math.floor(Math.random()*10) + 1 ); // 1 to 10 numbers

// Math.floor(Math.random()*(max-min+1)) + min
