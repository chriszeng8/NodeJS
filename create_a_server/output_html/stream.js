var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  // fs.createReadStream(__dirname+'/index.htm') creates a readable 
  // we know the destination is the response (which is writable sent back to the browser)
  fs.createReadStream(__dirname+'/index.html').pipe(res);
  // replace all Message
  // this is called dynamic content
}).listen(1337, '127.0.0.1');
