function longRunningOperation(callback) {
  // simulate a 3 second operation
  setTimeout(callback, 3000);
}
function webRequest(request) {
  console.log('starting a long operation for request:', request.id);
  longRunningOperation(function () {
    console.log('ending a long operation for request:', request.id);
  });
}
// simulate a web request
webRequest({ id: 1 });
// simulate a second web request
webRequest({ id: 2 });



/** In Listing 2-21, because of closures, we have access to the correct user request after the long-running operation
completes. We just handled two requests on a single thread without breaking a sweat. Now you should understand
the following statement: “Node.js is highly performant, and it uses JavaScript because JavaScript supports first-class
functions and closures.”
The immediate question that should come to mind when someone tells you that you only have a single thread
to handle requests is, “But my computer has a quad core CPU. Using only a single thread will surely waste resources.”
And the answer is that yes it will. However, there is a well-supported way around it that we will examine in Chapter 13
when discussing deployment and scalability. Just a quick tip about what you will see there: It is actually really simple
to use all the CPU cores with a separate JavaScript process for each CPU core using Node.js.
It is also important to note that there are threads managed by Node.js at the C level (such as for certain file
system operations), but all the JavaScript executes in a single thread. This gives you the performance advantage of the
JavaScript almost completely owning at least one thread. */