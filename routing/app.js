var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    // NodeJS allows us to get access to request's url by req.url
    if (req.url ==='/') {
    	 fs.createReadStream(__dirname + '/index.html').pipe(res);
    }

    else if (req.url ==='/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        var obj = {
            firstname: 'Jeremy',
            lastname: 'Lin'
        };
        res.end(JSON.stringify(obj));
    }
    
    else  {
        res.writeHead(404);
        res.end();
    }

}).listen(1337, '127.0.0.1');