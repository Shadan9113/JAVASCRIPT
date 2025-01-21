function orderPizza(greet, callBack){
    console.log("give me one cheese pizza")
    greet()

    setTimeout(()=>{
        console.log("your pizza is ready")
        callBack();
    },3000)

    function greet(){
        console.log("your order is confirmed wait i'll call you when its get ready")
    }
    function callBack(){
        console.log("thanks for the pizza");
        
    }
}
orderPizza();

// after the expire of  ms in callback it goes to the callback queue and then event loop check whether is     something in callback queue then it push the callback into call stack 

// microtask queue has higher priority than call stack queue

// event loop continuosly checking the call stack when all the code execute then it push the callback code which is in microtask queue