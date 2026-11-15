const arr = [1,2,3,4,5, "hello", "world"];
console.log(arr[0]); // accessing

const arrObj = new Array(1,2,3,4);

console.log(arrObj.length);


arr.push(5); //push
arr.pop();
arr.unshift(2); //at start
arr.shift(); // from start

console.log(arr);


// array to string with separator
console.log(arr.join(" & "));

// splice and slice method 

let arr2 = [1, 2, 3, 4, 5, 6, 7];

let slicing = arr2.slice(5,7); // remove 4
console.log(slicing);
console.log(arr2); // original not modified



let splicing_remove = arr2.splice(3,1);
console.log(splicing_remove); // return the removed element 
console.log(arr2); // remove from original

let splicing_add = arr2.splice(3,0,66); // add 66 at index 3
console.log(splicing_add); //return nothing
console.log(arr2); // 66 added


// concate 2 arrays
let a1 = ["daryl", "carl"];
let a2 = ["on-jo", "su-hyuk"];
let concatedArray = a1.concat(a2);
console.log(concatedArray);

let spread_merge = [...a1, ...a2];
console.log(spread_merge);
