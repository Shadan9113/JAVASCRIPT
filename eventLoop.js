console.log("start");

setTimeout(() => console.log("setTimeout resolved"), 0);

Promise.resolve().then(() => console.log("promise resolved"));

console.log("end");
