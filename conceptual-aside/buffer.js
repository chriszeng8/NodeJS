// To deal with binary data, we will use buffer in Node.js.
// https://nodejs.org/dist/latest-v4.x/docs/api/buffer.html

// We can store character as a encoded binary.

// convert Hello into binary using utf8 encoding
// By default, the V8 Engine/Node uses utf8 encoding by default if not specified.
// var buf = new Buffer('Hello','utf8')
var buf = new Buffer('Hello');
console.log(buf);

// convert binary data back into string
console.log(buf.toString());

// we can even convert binary data to JSON
console.log(buf.toJSON());
// gives Unicode character set (base 10)
//{ type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }

// works in a similar way as array/list.
console.log(buf[2])

// Buffer is fixed amount of data, it will overwrite the original data instead of extending/expanding it. 
buf.write('wo');
console.log(buf.toString());