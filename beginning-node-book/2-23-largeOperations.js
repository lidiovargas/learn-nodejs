/** Now let’s write some code that takes a long time to execute, for instance, a nonoptimized method of calculating
the nth Fibonacci number as shown in Listing 2-23, below */

console.time('timeit');
function fibonacci(n) {
  if (n < 2)
    return 1;
  else
    return fibonacci(n - 2) + fibonacci(n - 1);
}
fibonacci(44); // modify this number based on your system performance
console.timeEnd('timeit'); // On my system it takes about 9000ms (i.e. 9 seconds)


/** Now we have an event that can be raised from the Node.js event loop (setTimeout) and a function that can keep
the JavaScript thread busy (fibonacci). We can now demonstrate starvation in Node.js. Let’s set up a time-out to
execute. But before this time-out completes, we execute a function that takes a lot of CPU time and therefore holds up
the CPU and the JavaScript thread. As this function is holding on to the JavaScript thread, the event loop cannot call
anything else and therefore the time-out is delayed, as demonstrated in Listing 2-24. */