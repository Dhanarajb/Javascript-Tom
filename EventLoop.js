// What is Javascript?
// Javascript is single threaded, non-blocking, asynchronus language
// It has a call stack an event loop and callback queue + other APIs
// V8 is the javascript runtime which has a call stack and heap
// heap is used for memory allocation and the stack hold the execution context

// EventLoop:

// 1st step: when code is execute then it will pass to CALLSTACK and
// if there is api then it will go in web apis

// 2nd step:suppose if we have setTimeout then it will wait for few second in web apis then automatically transfer to callback queue

// 3rd step: final step transfer in CALLSTACK from callback queue
