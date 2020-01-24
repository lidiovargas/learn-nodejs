
# Cygwin installation

https://cygwin.com/install.html


# Cygwin Packages

Os pacotes que são imprescindíveis no cygwin (must-have) são:

```
lynx, wget, curl, rsync
python, python3
bzip, tar
bash-completion
vim, vim-common
tmux
git
diffutils
make
gcc-c, gcc-g++, gcc-fortran
openssh
nano
```

Os módulos são instalados normalmente pelo instalador gráfico do cygwin. Caso deseje instalar por código, poderá instalar o apt-cyg (explicações abaixo), e instalar todos os módulos de uma só vez

```
apt-cyg install lynx wget curl rsync \
python python3 bzip tar bash-completion \
vim vim-common tmux git diffutils make \
gcc-c gcc-g++ gcc-fortran openssh nano
```

Fonte: 
cygwin must have packages
https://www.youtube.com/watch?v=Wv7Bs5dRoK8

Packages, 4:30

## Install Apt-cyg (similar to apt-get)

Greater than sign is not allowed in the description. Change greaterThanSign to a greater than sign:

```
cd ~
lynx -source rawgit.com/transcode-open/apt-cyg/master/apt-cyg greaterThanSign apt-cyg
```

or

```
curl rawgit.com/transcode-open/apt-cyg/master/apt-cyg -OL -k

install apt-cyg /bin

apt-cyg install nano
apt-cyg install zip
apt-cyg install unzip
```

# Useful Stuff

## Aliases

Open baschrc:

```
nano ~/.bashrc
```
Add the following to ~/.bashrc (~/.bashrc is a settings file that runs commands every time the terminal opens)

```
alias desktop="cd D:/Lidio/Desktop"
alias open='cygstart'
alias reload='source ~/.bash_profile'
```

Curly braces are not allowed in the description. Substitute the following spaces with opening and closing curly braces like the video.

```
export PATH="$ HOME /bin:$ PATH "
```

Forgot to add this following line to ~/.bashrc in the video

```
source /bin/git-completion.bash
```

Save and quit. 

To reload without quit

```
source ~/.bashrc
```

## Integrate with Command Promt of Windows

#Integrate with Command Prompt, add to the end of the environment variables:

```
;C:\cygwin64\bin
```

## Integrate with other terminals emulators

Console2 Terminal:
https://sourceforge.net/projects/cons...

CMDER with cygwin integration:
https://github.com/cmderdev/cmder/wiki/Integrating-Cygwin#Add-Cygwin-to-Path

```
apt-cyg install chere
```

Into CMDER properties, type...

```
task parameters: /icon C:\cygwin64\Cygwin-Terminal.ico
commands: C:\cygwin64\cygwin.bat -c "/bin/xhere /bin/bash.exe '%V'"
```

Remember to change to your local paths.

## Color settings

```
tput colors
export TERM=xterm-256color
```
https://superuser.com/questions/736873/enable-256-colors-for-cygwin-under-mintty

To color the ls result, put this into .bashrc
```
alias ls="ls --show-control-chars -F --color=auto $*"
```

Put this in the last line of the file .bashrc
```
LS_COLORS=$LS_COLORS:'di=0;35:ln=35:ow=0;35:tw=0;35' ; export LS_COLORS
```

https://askubuntu.com/questions/466198/how-do-i-change-the-color-for-directories-with-ls-in-the-console


# SSH Server on Windows

https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys

https://docs.oracle.com/cd/E24628_01/install.121/e22624/preinstall_req_cygwin_ssh.htm#EMBSC281

Para configurar um ssh-server abra um terminal com acesso ao cygwin, e digite:
```
ssh-host-config
```

Para iniciar e parar os serviços de ssh:
```
cygrunsrv -S sshd (start)
cygrunsrv -E sshd (stop)
net start sshd (start cygrunsrv)
net stop sshd (stop cygrunsrv)
```

> NOTA: para reiniciar o sshd, após modificações no sshd_config, usar o comando cygrunsrv -E sshd (já que o net stop sshd só reinicia o cygrunsrv, mas não o serviço interno sshd dentro dele).

# Outros links
- https://superuser.com/questions/1077568/cygwin-terminal-cannot-show-the-contents-of-unicode-text-file-correctly

- https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/


- https://superuser.com/questions/269818/change-default-code-page-of-windows-console-to-utf-8

- https://cygwin.com/cygwin-ug-net/setup-locale.html

- http://manpages.ubuntu.com/manpages/bionic/man5/sshd_config.5.html

- https://nmap.org/download.html