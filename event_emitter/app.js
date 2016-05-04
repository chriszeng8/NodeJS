var Emitter = require('./emitter.js');

var emtr = new Emitter();

emtr.on('prop1',function(){
    console.log('listener function 1')
});

emtr.on('prop1',function(){
    console.log('listener function 2')
});

emtr.on('prop1',function(){
    console.log('listener function 3')
});

emtr.emit('prop1');