a();
function a(){
    var x = 4;
    b();
    function b(){
        c();
        function c(){
            console.log(x);
            
        }
    }
}
// this is a goood example of function scope with hoisting