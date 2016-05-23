var express = require('express');
var app = express();

app.use('/assets', express.static(__dirname + '/public'));

// set a view engine type for response rendering, which is ejs type
// the response will be stored in a folder called 'views' by default
app.set('view engine','ejs');

var port = process.env.PORT || 3000;
app.get('/',function(req, res){
	// look for index.ejs (as ejs is specified as the view engine type)
	// from the views folder
	res.render('index')
});

// parameter id is followed by : in the URL
// req.params.property can be accessed
app.get('/person/:id',function(req, res){
	res.render('person',{ID:req.params.id});
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

