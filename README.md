# understanding-javascript
As a JavaScript developer, you need to know how to work with asynchronous Web APIs and handle the response or error of those operations. In this article, you will learn about the event loop, the original way of dealing with asynchronous behavior through callbacks, the updated ECMAScript 2015 addition of promises, and the modern practice of using async/await.

============================================================================================================================

This section will explain how JavaScript handles asynchronous code with the event loop. It will first run through a demonstration of the event loop at work, and will then explain the two elements of the event loop: the stack and the queue.

Whether you set the timeout to zero seconds or five minutes will make no difference—the console.log called by asynchronous code will execute after the synchronous top-level functions. This happens because the JavaScript host environment, in this case the browser, uses a concept called the event loop to handle concurrency, or parallel events. Since JavaScript can only execute one statement at a time, it needs the event loop to be informed of when to execute which specific statement. The event loop handles this with the concepts of a stack and a queue.

## Stack
The stack, or call stack, holds the state of what function is currently running. If you’re unfamiliar with the concept of a stack, you can imagine it as an array with “Last in, first out” (LIFO) properties, meaning you can only add or remove items from the end of the stack. JavaScript will run the current frame (or function call in a specific environment) in the stack, then remove it and move on to the next one.

## Queue
The queue, also referred to as message queue or task queue, is a waiting area for functions. Whenever the call stack is empty, the event loop will check the queue for any waiting messages, starting from the oldest message. Once it finds one, it will add it to the stack, which will execute the function in the message.