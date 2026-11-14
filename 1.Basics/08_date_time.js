// Date and Time in JS 
let date = new Date();

console.log(date.toDateString());
console.log(date.toLocaleDateString());

let createDate = new Date(2025,0,4);
console.log(createDate.toLocaleDateString());

let time = Date.now();
console.log(time); // milliseconds
console.log(date.getTime()/1000); // seconds

let dateNew = new Date();
console.log(dateNew.getDate());
console.log(dateNew.getDay());
console.log(dateNew.getMonth() + 1);

// customize



console.log(dateNew.toLocaleString('default', {
                   weekday : "long"
            })
);