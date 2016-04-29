require('./greet');

// greet()
// greet cannot be accessed directly

// Now the specified exported function is stored in var greet_attached.
var greet_attached = require('./greet.js');
greet_attached();