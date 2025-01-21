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