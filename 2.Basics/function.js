function func_name(){
    console.log("function first");
    return "returning...."
}

console.log(func_name());

// deafult parameter

function func1(name = "Rakesh"){
    console.log(`Good Morning ${name}`);
}
func1("Priya");

// rest operator 
function func2(...para){
    return para;
}
console.log(2,3,4);
