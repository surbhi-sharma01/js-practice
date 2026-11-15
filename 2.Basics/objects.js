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
        return this.id; // this usage
    }
}

console.log(obj4.getId());

// combining 2 objects :

let object1 = {
    name : "alex",
    age : 90
}

let object2 = {
    a : "alia",
    b : 90
}

let object3 = Object.assign({},object1,object2);

console.log(object3);

// second way by spreading: 
let object4 = {...object1, ...object2};
console.log(object4);

//some methods

console.log(Object.keys(object4));
console.log(Object.values(object4));
console.log(Object.entries(object4));
console.log(Object.hasOwnProperty('name'));


// shorthand of objects -> when key name and property name are same
let prop1 = "shirt";
let prop2 = "pants";

const object5 = {prop1,prop2};
console.log(object5);

// shorthand method
const object6 = {
    item : "television",
    turnItOn(){
        console.log("T.V. starting....");
    }
}

// destructuring objects

const {item: it} = object6;
console.log(it);

// autoboxing 
let str = "hi";
let str2 = new String("hi");
console.log(str === str2);
console.log(typeof str2);