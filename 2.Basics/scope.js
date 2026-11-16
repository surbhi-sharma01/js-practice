if(true){
    let a = 1;
    const b = 4;
    var c = 9;
}
// console.log(a);
// console.log(b);
console.log(c);

// global scope -> available everywhere
// local scope -> only available in a block

// function inside function -> CLOSURE concept

function outer(){
    let outer_var = "hello";
    console.log("outer function");

    function inner(){
        let inner_var = "hi";
        console.log("inner function ", outer_var);
    }

    // console.log(inner_var);

    inner();
}
outer();

// function hoisting 
a();
function a(){
    console.log("abab");
}

// b();
let b = function(){
    console.log("js");
}