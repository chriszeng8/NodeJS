//require('') will look for package in the Node CORE library.
// if not found, it will look for it in other places, one of which is the 
// node_modules folder

var express = require('express');
var app = express();

// app.listen(3000);

// environment variable:
// specific to ehte server, our code is living in.
// the port in the server can be other ports other than 3000.

// SET a PORT variable as an enviroment vairbale
// if a enviroment variable does not exist, it will be 3000;
var port = process.env.PORT || 3000;

// HTTP METHOD: GET/POST/DELETE verbs
// Specify the type of action the request wishes
// Get query result is GET method
// click SUBMIT button is POST method

// For GET method
// express response
// res.send() is for sending HTML response
app.get('/',function(req, res){
	res.send('<html><head><body><h1>hello world</h1></body></head></html>')
});

// res.json() sends json as response
app.get('/api',function(req, res){
	res.json({firstname:'John',lastname:'Doe'})
});


// We can have the same URL, and have both GET and POST, as long
// the method type is specified in the HTTP request.
// They will be handled separted
app.post('/',function(){
	
});


app.listen(3000);

