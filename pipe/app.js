// Pipe:
// Connecting streams 
// pipes can connect stream starting from readable, and chanel along
// readable and writable streams, and end at writable stream.

// readable to writable is very common.

var fs = require('fs');
var zlib = require('zlib');

// if the lorem text file is bigger than the buffer size,
// will get chucks of data at a time.
var readable = fs.createReadStream(__dirname +
	'/lorem.txt');

// write file by stream
var writable = fs.createWriteStream(__dirname +
	'/lorem_copy.txt');

// compressed stream
// empty now
var compressed = fs.createWriteStream(__dirname +
	'/lorem.txt.gz');

// create a transform stream (compressed)
// the output of this can be piped to 
// readable and writable
var gzip = zlib.createGzip();



// pass the destination - writable (send from reable to writable)
readable.pipe(writable);

// METHOD CHAINING:
// a method returns an object so we can keep calling more methods.
// send through compressor (gzip stream), piping through compressed stream 
readable.pipe(gzip).pipe(compressed);


// stream helps performance.
// In Node, always choose to use Asynchronous over synchronous, choose stream over transfering whole file.