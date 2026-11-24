// for of 

let arr = ["kim-jae-hee", "kim-tae-ung", "philip", "sato hideo", "hanako", "knom-mik"];

for(const a of arr){
    console.log(a);
}

// for Each 

arr.forEach( (item) => {
    console.log(item);
});

arr.forEach( (item,index,array) => {
    console.log(item,index,array);
});

// for in -> objects

let obj = {
    1 : 'a',
    2 : 'b'
};

for(let key in obj){
    console.log(key , obj[key]);
}

