SOLARNET Virtual Observatory (SVO)
==================================
The SVO is a service first supported by the [SOLARNET](http://solarnet-east.eu/) project, funded by the European Commission’s FP7 Capacities Programme under the Grant Agreement 312495. Then made operational thanks to the [SOLARNET2](https://solarnet-project.eu) project, funded by the the European Union's Horizon 2020 Research and Innovation Programme under Grant Agreement 824135.

It's purpose is to collect metadata from as many solar observations as possible, especially those made thanks to the SOLARNET projects, in a common catalog and make them available to the scientific community.

A first prototype version was released in February 2016, and the operational version is available now at https://solarnet.oma.be

The SVO code is split in several parts:
- A [web server](https://github.com/bmampaey/SOLARNET-server)
- A [web client](https://github.com/bmampaey/SOLARNET-web-client)
- A [python client](https://github.com/bmampaey/SOLARNET-python-client)
- An [IDL client](https://github.com/bmampaey/SOLARNET-IDL-client)
- [Data provider tools](https://github.com/bmampaey/SOLARNET-provider-tools)

Development environment installation
------------------------------------

Node.js is used to manage the packages. To install it on Ubuntu 18.04
```
# Download the nvm installation script at https://raw.githubusercontent.com/creationix/nvm/master/install.sh, and execute it
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Install the latest stable Node.js version (note that version 18 and above are not compatible on Ubuntu 18.04)
nvm install 16.15.0
```

Install the vue cli development software
```
npm install -g @vue/cli
```

Install the git repository and install the required node packages
```
git clone git@github.com:bmampaey/SOLARNET-web-client.git web-client

cd web-client

npm install # This will install all the required node package listed in package.json
```

Running the development environment
-----------------------------------

Execute the command `vue ui`, this will open your web browser with a graphical interface to test and compile the web client.

If you have not done so already, import the project folder.

Then on the project page, under the left tab *tasks* you will find:
 - **serve**, this will run a web server with the web client, the server auto reloads on code change
 - **build** that will compile the software and update the dist folder
 - **lint** that will beautify your code

When you are ready to release a new version of the web client, you need to lint and build. Then commit all the files under **src**, AND also all the files under **dist**

The graphical interface also allows to manage the node packages, under the left tab *dependencies*, and to change some of the settings of the project under the left tab *configuration*

Any change to these two, will probably change the files package.json and package-lock.json, these 2 file needs also to be commited to the repository.
