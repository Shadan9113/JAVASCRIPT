let myPromise = new Promise((resolve,reject)=>{
    let success = true;

    if(success){
        resolve("promise resolve")
    }else{
        reject("promise reject")
    }
})
.then((result=>{
    console.log(result)
}))
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Promise completed, regardless of success or failure.")
})