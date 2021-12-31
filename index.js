var http = require('http')
var server = http.createServer(function(req,res){
    res.writeHead(200,{"context-type":"text/html"});
    res.write("<h1>hello</h1>")
    res.end();
}).listen(2000);
console.log("server started on 2000");