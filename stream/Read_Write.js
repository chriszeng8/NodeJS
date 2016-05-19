// readable stream (read only)
// writable stream (write only)
// duplex stream (write and read)
// transform stream (allow change data)
// Abstract Class/
//

// Stream is an inheritance of Event Emitter
// Readable is an inheritance of Stream (and Event Emitter)


// Request from Browser to Server is readable
// Response from Server to Browser is writtable

var fs = require('fs');

// highWaterMark specify the chuck size

// if the lorem text file is bigger than the buffer size,
// will get chucks of data at a time.
var readable = fs.createReadStream(__dirname +
	'/lorem.txt', {encoding : 'utf8', highWaterMark: 32*1024})
var readable2 = fs.createReadStream(__dirname +
	'/lorem.txt', {encoding : 'utf8'})

// write file by stream
var writable = fs.createWriteStream(__dirname +
	'/lorem_copy.txt');

// What actually starts the process? 'data': listen to data
// The fact we are listening to the data stream is triggering the function
readable.on('data',function(chunk){
	console.log('Listening to readable data');
	console.log(chunk.length)
	writable.write(chunk);
});


readable2.on('data',function(chunk){
	console.log('Listening to readable2 data');
	console.log(chunk.length)
});





//Create 