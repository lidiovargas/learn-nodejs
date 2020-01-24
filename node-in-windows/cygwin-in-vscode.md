Após ter instalado o Cygwin e o Node Js, entre nos settings do vscode 

- Ctrl+Shift+P, 
- Digita settings, 
- e entra "Preferences: Open Settings (JSON)"

Já com os settings abertos, atualize o arquivo:

```javascript
{
    "terminal.integrated.shell.windows": "C:\\Users\\Lidio\\dev\\programs\\cygwin\\bin\\bash.exe",
    // Use this to keep bash from doing a 'cd ${HOME}'
    "terminal.integrated.env.windows": {
    "CHERE_INVOKING": "1"
    },
    // Make it a login shell
    "terminal.integrated.shellArgs.windows": [
    "--login",
    "-i"
    ],

}
```

Lembrando de alterar o caminho do bash para o que estiver no seu computador.

Normalmente o Cygwin funciona com o MinTTY que é um "terminal emulator" diferente do "bash" que é um "shell" (consulte no google). Por isso é necessário fazer esses comandos para que pegue as credenciais do usuário atual.