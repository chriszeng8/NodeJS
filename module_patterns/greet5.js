// Revealing module
//Exposing only the properties and methods we want via an returned object.

var greeting = 'Hello world!!!!';

function greet_func() {
    console.log (greeting);
}

// only exposing the greet function, not the greeting variable
module.exports = {
    greet: greet_func
}