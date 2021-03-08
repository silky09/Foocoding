/**
 * A "callback" is simply a function passed to another function 
 * that gets executed (run) after a 
 * potentially long running operation has completed.
 * 
 * write a function that takes another function as an argument and runs it.
*/


function foo(func) {
  // What to do here?
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);




 