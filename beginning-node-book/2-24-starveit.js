// utility funcion
function fibonacci(n) {
  if (n < 2)
    return 1;
  else
    return fibonacci(n - 2) + fibonacci(n - 1);
}
// setup the timer
console.time('timer');

setTimeout(function () {
  console.timeEnd('timer'); // Prints much more than 1000ms
}, 1000)

// Start the long running operation
fibonacci(44);

/** A linha 9 é executada (o relógio com o nome `timer` é iniciado).
 *  
 * Após isso (linha 11), é enviado uma instrução para imprimir o tempo do timer, pelo menos 1000ms após 
 * o solicitado. Essa instrução é enviada ao event loop para ser executada assim que disponível, mas...
 * O node continua a executar o código atual até o final da linha.
 * 
 * A linha 16 é então executada (no loop atual), mas este comando consome muito tempo (em meu notebook 14s).
 * Assim, o timer de 1000ms só pode ser executado quando o event loop estiver disponível de novo,
 * e isso só acontece 14s após. Enquanto isso, o event-loop fica bloqueado (o que é chamado de `starvation`),
 * e deve ser evitado no NodeJs.
 * 
 * A linha 11 só é executada 14 segundos após a linha 16.
 * 
 * Esta é a razão de ser necessário aprender a trabalhar com requisições assíncronas, 
 * isto é, com callbacks, promises e async/await.
 * Callbacks existem no javascript desde sempre. 
 * Promises foram introduzidas no ES6(2015), 
 * e async/await no ES8(2017).
 * 
 */



/** Now we have an event that can be raised from the Node.js event loop (setTimeout) and a function that can keep
the JavaScript thread busy (fibonacci). We can now demonstrate starvation in Node.js. Let’s set up a time-out to
execute. But before this time-out completes, we execute a function that takes a lot of CPU time and therefore holds up
the CPU and the JavaScript thread. As this function is holding on to the JavaScript thread, the event loop cannot call
anything else and therefore the time-out is delayed, as demonstrated in Listing 2-24. */

/** One lesson here is that Node.js is not the best option if you have a high CPU task that you need to do on a client
request in a multiclient server environment. However, if this is the case, you will be very hard-pressed to find a scalable
software solution in any platform. Most high CPU tasks should take place offline and are generally offloaded to a
database server using things such as materialized views, map reduce, and so on. Most web applications access the
results of these computations over the network, and this is where Node.js shines—evented network I/O.
Now that you understand what an event loop means and the implications of the fact that JavaScript portion of
Node.js is single-threaded, let’s take another look at why Node.js is great for I/O applications. */