function a(){
    var x = 4;
    return function b(){
        console.log(x)
    }
}
let z = a();
z();

// closure always return its chlid function or lexical 

function outer(){
    let count = 0;
    return function inner(){
        count++
        return count;
    }
}
let counter = outer();
console.log(counter());
console.log(counter());

// good practice

