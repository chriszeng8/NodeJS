// The JSON will be stored in assigned variable greetings
var greetings = require('./greetings.json')

var greet = function (){
    console.log(greetings.cn)
}

module.exports = greet;