var fs = require ('fs');

//__dirname: current directory
// fs.readSync will user buffer
// Synchronous approach to read a file
// code won't progress to the next line until file is read.
// but many times, this is bad.
// for example, if many users request the file, or the file is large.
// users will have to 
var greet = fs.readFileSync(__dirname +'/greet.txt','utf8');
console.log(greet)


var greet = fs.readFile(__dirname +'/greet.txt', 
	function(err, data){
// Error first callback: a callback function takes a error as the 1st parameter
		//null if no error
		// if (!(err)){
			console.log(data)
		// }
	});

var greet = fs.readFile(__dirname +'/greet.txt','utf8', 
	function(err, data){
// Error first callback: a callback function takes a error as the 1st parameter
		//null if no error
		// if (!(err)){
			console.log(data)
		// }
	});

console.log('done')

//readFile is loading file into V8 heap (memory space, similar to RAM), therefore, more request of large
//files is still problematic for readFile. we can to use stream.