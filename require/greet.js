var greet = function() {
    console.log('Hello, greet func 1');
};

var greet2 = function(){
    console.log('Hello, greet func 2');   
}
// greet();

// make this module/function available/exposed to other moduless
// module.exports = greet;
module.exports = greet2;