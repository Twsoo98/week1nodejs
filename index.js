var http = require('http');
var upperCase = require('upper-case');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end(upperCase('Hello Node'));
}).listen(7575);
console.log("listening in port 7575");