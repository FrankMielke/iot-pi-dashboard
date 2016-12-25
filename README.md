# Watson-IoT standalone dashboard samples
This repository shows the sample use of the watson IoT dashboard react js component in different frameworks.



## Getting started
Before you install npm dependencies make sure your local npm is configured to access ibm's whitewater npm registry:
```console
npm login --registry=https://npm-registry.whitewater.ibm.com --scope=@watson-iot
``` 

Use your GitHub Enterprise username and w3 passwort to login. The first time that you attempt, you will get an error on the command line, prompting you to visit a GitHub Enterprise URL. Copy the URL and paste it in a web browser. Complete the GitHub login to finalize authentication and resolve your token.

If you still get errors try the following command:  
```console
npm config set @watson-iot:registry https://npm-registry.whitewater.ibm.com
```  
or see [npm whitewater repository](https://github.ibm.com/Whitewater/npm-enterprise) for further help


## Install

### React Frame
Run `npm run react-init` to load all dependencies  

Run `npm run react-start` to start the node server with the sample apps

### Angular frame

Run `npm run angular-init` to load all dependencies  

Run `npm run angular-start` to start the node server with the sample apps
