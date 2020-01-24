console.log('linha 1');

setTimeout(function(){
  console.log('linha 4');
}, 0);

console.log('linha 7');

/** o console retorna assim: 
linha 1
linha 7
linha 4

Por que? Se colocarmos o tempo da função de callback em 0 ms?

Porque isto não significa 0ms a partir de agora, 
mas "imediatamente assim que a próxima rodada do event-loop 
estiver disponível". Na rodada atual, ele simplesmente inscreve
a função setTimeout para que seja analisada na próxima rodada.

Um código simples como este, ilustra de forma clara o funcionamento do event-loop.

Expicação em mais detalhes é obtida na explicação da própria documentação, onde inclusive
é possível constatar a prioridade de execução, etc, em alguns diagramas legias ali:

https://nodejs.org/uk/docs/guides/event-loop-timers-and-nexttick/


 * */ 