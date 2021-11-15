# node-cli-vbox
Nodejs Cli for VirtualBox  
This is a NodeJS CLI for managing VirtualBox VMs.  
The package can be installed locally with npm i -g cli-vbox  
To run the cli from terminal after installation the main command is vboxcli  
Alternatively you may clone this repository to add functionality or run the project without installing  

For the time being there are the following options available:  

-h,--h,help : Gives a list of available commands  
list : Lists all VMs  
start <name>: Starts a VM with the requested name  
stop <name>: Stops a running VM with the requested name   
importvm <name>: Imports a VM with the requested name  
deletevm <name>: Deletes a VM with the requested name  
  
Example (installed from npm): vboxcli start ubuntuvm  
Example (running from project): node index.js start ubuntuvm  
