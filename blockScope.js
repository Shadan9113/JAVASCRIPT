a();
function a() {
  if (true) {
    let x = 10;
  }
  b();
  function b() {
    c();
    function c() {
      console.log(x);
    }
  }
}
// in the above code it give an error because let and const are block level scope and you try to access it from the outside of the scope

a();
function a() {
  let x = 10;
  b();
  function b() {
    c();
    function c() {
      console.log(x);
    }
  }
}
// this code work fine


var a = 20;
{
    var a = 30;
    let b = 40;
    const c = 50;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);

// block scope with shadowing