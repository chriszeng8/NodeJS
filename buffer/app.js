// JavaScript didn't have ways to deal with binary data
// But latest version (ES6) can deal with binary

// 8 byte: 8 x 8 bits = 64 bits
// This is a new feature from v8 engine.
var buffer = new ArrayBuffer(8);

// Deal with binary data.
// change buffer into array (convert that 64 bit binary data into an array, in this case 32 bit integers)
var view = new Int32Array(buffer);
// therefore, only 2 Int32 Array element can be stored.
view[0] = 5;
view[1] = 15;
// view will not accommodate the third one.
// It does not give error, but it is not stored either.
view[2] = 25;
console.log(view)