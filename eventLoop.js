console.log("start");

setTimeout(() => console.log("setTimeout resolved"), 0);

Promise.resolve().then(() => console.log("promise resolved"));

console.log("end");

// Priority Order of the Event Loop
// Call Stack – Executes synchronous code first.
// Microtask Queue (High Priority)
// Promises (.then)
// MutationObserver
// Callback Queue (Low Priority)
// setTimeout
// setInterval
// fetch
// DOM events
