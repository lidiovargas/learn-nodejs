function longRunningOperation(callback) {
  // simulate a 3 second operation
  setTimeout(callback, 3000);
}

function userClicked() {
  console.log('starting a long operation');
  longRunningOperation(function () {
    console.log('ending a long operation');
  });
}
// simulate a user action
userClicked();



/** Node.js Performance Secret
 * 
There is a single execution thread in JavaScript. This is the way web browsers have traditionally worked. If you have
a long-running operation (such as waiting for a timer to complete or a database query to return), you must continue
operation using a callback. Listing 2-20 provides a simple demo that uses the JavaScript runtime setTimeout function
to simulate a long-running operation. You can run this code using Node.js.
 */

/** This simulation is possible in JavaScript because we have first-class functions and passing functions—a callback
is a well-supported pattern in the language. Things become interesting when you combine first-class functions with
the concept of closures. Let us image that we are handling a web request and we have a long-running operation such
as a database query that we need to do. A simulated version is shown in listing 2-21. */