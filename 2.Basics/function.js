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

// passing object in function

let obj = {
    val1 : 2,
    val2 : 8.9,
    isCorrect : true
}

function passing_object(anObject){
    console.log(anObject.val1 + " " + anObject.isCorrect);
}

passing_object(obj);