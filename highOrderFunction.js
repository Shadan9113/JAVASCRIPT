function greet(name, greeter) {
    console.log(greeter(name));
  }
  
  function formalGreeting(name) {
    return "Hello, Mr./Ms. " + name + ".";
  }
  
  function casualGreeting(name) {
    return "Hi, " + name + "!";
  }
  
  greet("Alice", formalGreeting); // Output: Hello, Mr./Ms. Alice.
  greet("Bob", casualGreeting);   // Output: Hi, Bob!