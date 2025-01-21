// variable

console.log(x);
var x = 4;
// undefined

console.log(y);
let y = 5;
// ReferenceError for both let and const

a();
const a = () => {
  let x = 4;
  console.log(x);
};
// let and const are aloocoated in the memory script but the function and var are in the global scope thats     why let and const are goes in the temporal deadzone if we execute before initialization
// it also gives refrence error
// only function is getting hoisted
