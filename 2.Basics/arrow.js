// this keyword 

// in objects
const obj = {
    var : 78,
    function : function(){
        console.log(this.var);
        console.log(this);
    }
}
console.log(this); 
obj.function();

// in functions and arrow functions

function func(){
    let u = "hello";

    console.log(this);
    console.log(this.u);
}

const funct = () => {
    let y = "hello";
    console.log(this.y);
    console.log(this); // global object
}

let object = {
     name : "priety",
     morning : function(){
        const greet = () => {
           console.log(this.name);
        }
        greet();
     }
}
object.morning();

let object2 = {
     name : "priety",
     night : () => {
            console.log(this.name);
     }
}
object2.night();

// ARROW FUNCTION

let functi = (a,b) => {
    return a + b
}
let functio = (a,b) =>  (a + b);


