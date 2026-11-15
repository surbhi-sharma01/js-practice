// constructor object

// Object.create -> singleton

//object literal
const obj = {
    name: "priya",
    age : 67,
    isAlive : true,
    diagnosis : ["stomach pain", "high fever"]
}

// accessing 
console.log(obj.name);
console.log(obj["name"]);

// Symbol as key
let symbol2 = Symbol("ocean waves");

let obj2 = {
    [symbol2] : "sea waves",
    "fish" : "nemo"
}

console.log(obj2[symbol2]);
console.log(symbol2);
console.log(obj2["fish"]);

// freeze an object

let obj3 = {
    property : "prop1"
}

Object.freeze(obj3);

obj3.property = "changing"; // not change
console.log(obj3.property);

// function inside object

let obj4 = {
    id : 34,
    getId  : function(){
        return this.id;
    }
}

console.log(obj4.getId());
