var greet2_a = require('./greet2');
greet2_a.greet();

//OR
var greet2_b = require('./greet2').greet
greet2_b();

// Require caches the module
var greet3 = require('./greet3');
greet3.greet();
// changed the property
greet3.greeting = 'changed hello world';

// If cached already, the new object will be pointing to the same object.
// Since the exported module is an object. 
// It is passed by reference, greet3b will point to the same memory as greet3 object 
var greet3b = require('./greet3');
greet3b.greet();


// what if we don't want to point to the same object
// don't make new instance within the exported module, instead, create new instances after require.
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();
grtr.greeting ='changed hello world'

var Greet4b = require('./greet4');
var grtr_b = new Greet4();
grtr_b.greet();



var greet5 = require('./greet5').greet;
greet5();
// note that the greeting property cannot be accessed, as it is not part of exported module.
// only the function is exported.
console.log('greet5.greeting: ' + greet5.greeting);