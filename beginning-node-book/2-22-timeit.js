/** 
 * A sintaxe da função é `setTimeout(callback, time)`
 * onde `callback` é uma função que é passada como parâmetro,
 * e `time` é o tempo em milissegundos.
 * Significa que a função `callback` será executada após o tempo determinado em `time`
 * 
 */

console.time('timer');

setTimeout(function(){
  console.timeEnd('timer');
},1000);

/** NOTA AO INICIANTE:
 * Uma coisa muito peculiar do javascript, é que você poderia declarar a função no início do código,
 * como a maioria das linguagens, e depois só chamá-la:
 * setTimeout(funcaoQueDeclareiAntes, 1000)
 * 
 * Mas o javascript permite também a sintaxe de declaração da função direto no argumento, como 
 * se função anônima, do jeito que está na linha 11-13 acima. Assim o callback é tudo o que começa
 * após o parêntese na linha 11, até a chave que fecha antes da vírgula na linha 13.
 * E nesta sintaxe, a função não precisa ser declarada antes (ganha limpeza de código?). 
 * 
 * A maioria dos exemplos encontrados, possivelmente fará uso das funções anonimas direto no parâmetro da função.
 */


/** A cada vez que é rodada a aplicação (node 2-22-timeit.js) 
 * o sistema retorna 1002, 1003, 1002, 1004, mas nunca 1000.
 * Isso acontece devido ao funcionamento do 'Event Loop' do NodeJs.
 * 
 * A função `setTimeout` será executada imediatamente assim que o event-loop estiver disponível,
 * mas não no mesmo instante que ela é solicitada. 
 * 
 * Isto fica mais evidente quando o time = 0ms. Este não é executado 0ms após a solicitação,
 * mas "imediatamente assim que o Event Loop estiver disponível".
 * 
 * OBS: para entender o princípio de `starvation` este exercício deve ser visto junto com o 2-23.
 */


/**
 * More Node.js Internals
 * -------------------------------
It is not terribly important to understand the internals of how Node.js works, but a bit more discussion make you more
aware of the terminology when you discuss Node.js with your peers. 

At the heart of Node.js is an `event loop`.

Event loops enable any GUI application to work on any operating system. The OS calls a function within your
application when something happens (for example, the user clicks a button), and then your application executes the
logic contained inside this function to completion. Afterward, your application is ready to respond to new events that
might have already arrived (and are there on the queue) or that might arrive later (based on user interaction).

 * Thread Starvation
 ----------------------
Generally during the duration of a function called from an event in a GUI application, no other events can be
processed. Consequently, if you do a long-running task within something like a click handler, the GUI will become
unresponsive. This is something every computer user I have met has experienced at one point or another. This lack of
availability of CPU resources is called `starvation`.
Node.js is built on the same event loop principle as you find in GUI programs. Therefore, it too can suffer from
starvation. To understand it better, let’s go through a few code examples. Listing 2-22 shows a small snippet of code
that measures the time passed using console.time and console.timeEnd functions.
 */

/** code above */

/** If you run this code, you should see a number quite close to what you would expect—in other words, 1000ms.
This callback for the timeout is called from the Node.js event loop. */