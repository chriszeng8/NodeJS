//TAKEAWAY: 
// variable and execution within scope does not affect variable outside the scope.
// In other words: what is created in the IIFE is only accessible within the IIFE.
// This is what NodeJS takes advantage of.

var firstname = 'Chris';

//IIFE: immediately invoked function
(function (fname){
    // var firstname = 'John';
    var firstname = fname;
    console.log(firstname);
}('John'));

console.log(firstname); //still return 'Chris'