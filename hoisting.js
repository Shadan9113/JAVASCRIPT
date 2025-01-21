// variable

console.log(x)
var x = 4; 
// undefined

console.log(y)
let y = 5;
// ReferenceError for both let and const


a();
const a = () => {
    let x = 4;
    console.log(x)
}
// it also gives refrence error
// only function is getting hoisted