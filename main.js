
/**
 * JavaScript code that does not use any asynchronous Web APIs will execute in a synchronous manner—one at a time, sequentially. 
 */
function first() {
    console.log(1)
  }
  
  function second() {
    setTimeout(() => {
        console.log(2)
    }, 2000);

    
  }
  
  function third() {
    console.log(3)
  }

first()
second()
third()