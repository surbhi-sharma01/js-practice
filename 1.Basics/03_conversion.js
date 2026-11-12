let a = "33n";
let b = Number(a);

console.log(typeof(b));

// change to number
console.log(b);
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));

// change to boolean
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("string"));
console.log(Boolean(""));
console.log(Boolean(23));
console.log(Boolean(null));
console.log(Boolean(undefined));

// change to string
console.log(String(1));
console.log(typeof String(null));
console.log(typeof String(undefined));

// operations

console.log(62+2);
console.log(3-2);
console.log(4/2);
console.log(2*2);
console.log(2**3);
console.log(2%3);

// string concatenation

let str1 = "abc";
let str2 = "def";
console.log(str1 + str2);

// Add string and a number

let str = "2";
let n = 3;
console.log(str + n); // 23 convert the n to string

console.log(n + str); // 32

console.log("1" + 2);
console.log(2 + 4 + "9");

console.log(+true);
console.log(+"");




