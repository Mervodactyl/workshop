var http = require("http");
var fs = require("fs");

var port = process.env.PORT || 8888;

function handler(request, response) {
  var url = request.url;
  if (url.length === 1) {
    response.writeHead(200, {"Content-Type": "text:html"});
    response.end("whaaaaaat uuuuuuuuup!!!!!");
  }
}

http.createServer(handler).listen(port);

console.log("node http server listening on http://localhost:" + port);
