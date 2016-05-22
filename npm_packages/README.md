NPM Node Package Management System

* Automatically update and install packages
* manages package dependencies.

[Semantic Versioning](semver.org)
Just look at the version number, we know certain rules were applied.

e.g., Version 1.7.2
MAJOR. MINOR. PATCH

PATCH number is incremented:
* if some bugs were fixed. Your code will work fine.

MINOR number is incremented:
* Some new features were added. Your code will work fine.

MINOR number is incremented:
* Big changes. Your code will work break (most likely).



Packages can be searched on [npmjs](https://www.npmjs.com/).


npm init 
Packages: moment (for displaying dates, very popular)
-- Set an app first!
-- npm init


As a result npm init:

An package.json file is created:
```
{
  "name": "testapp",
  "version": "1.0.0",
  "description": "My First npm init project",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Note that the script part:
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

correponds to a npm command, in this case, ```npm test``` by default.

###npm install package_name --save
Now two things happened: 

1. a new folder called ```node_modules``` is created, and external modules are stored in this folder

2. as the result of ```--save ```, dependcies: ^2.10.6 is now recorded in package.json
```^``` the carrot mean, any non-MAJOR change can be updated.
```~``` ~2.10.6 means only accept PATCH changes, even MINOR changes are not allowed.


###npm install 
npm install can rebuild the node_modules folder.

* The package.json can enable us to send project to other developers, without the node_module folder, which reduces the project size substantially. Similar to Maven in Java Spring.
* All what the developer has to do is to install the depencies by typing ```npm install```

###npm install package_name --save-dev
Install package for development purpose only

For example,
npm install jasmine-node --save-dev
jasmine-node for automatically test software

Now we can notice an other property called devDependencies, which is different from the depencies property.
```
  "devDependencies": {
    "jasmine-node": "^1.14.5"
}
```
###(sudo) npm install package_name -g

Global npm install, package will be installed somewhere that can be accessied from any apps, which are actuall y stored at ```/usr/local/lib/```on MacOS.

###npm update
npm update will update the depencies as allowed/restricted.

###nodemon app.js
after nodemon is installed globally.
Nodemon is a package that notice the change in app.js file, and restart the node server when a change is made, in which case, we no longer need to shut down the server, and restart after making changes to the ```app.js```.


###Using other people's code
Any one can push code to npm. Be careful when having dependencies.
