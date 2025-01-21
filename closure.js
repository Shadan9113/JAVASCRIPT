function a(){
    var x = 4;
    return function b(){
        console.log(x)
    }
}
let z = a();
z();

// closure always return its chlid function 