var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  //// 1. send plain text as response
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end('Hello World\n');

  ////2. send html as response
  // The javascript here is compiled to machine language
  // therefore, if any changes are made here, node needs to restart
  res.writeHead(200, {'Content-Type': 'text/html'});
  // read HTML as buffer
  // var html = fs.readFileSync(__dirname+'/index.html');


  // 3. Replace in html
  // instead we need to change it to stream; 
  // since encoding method utf8 is specified, var html is now a string
  var html = fs.readFileSync(__dirname+'/index.html','utf8') ;
  var message = 'Hello World ... '
  // replace all Message
  // this is called dynamic content
  html = html.replace(/{Message}/g,message);

  res.end(html);

}).listen(1337, '127.0.0.1');
