require function can require a .js file as well as a folder.

e.g.,
```
require(./greet)
```
if greet.js does not exist, node will look for a file called ```index.js``` in the greet folder.

This is to accomplish more complicated module exports.


The included examples included a two-layer requires. One in the ```index.js``` within the greet folder, and one within the ```app.js``` file