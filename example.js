
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('hola whatsup!');
}).listen(8080, '127.0.0.1');

console.log( 'Running at 127.0.0.1:8080');