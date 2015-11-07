"use strict"

var http = require("http");
var fs = require("fs");

var nodeStatic = require('node-static');

var port = process.env.PORT || 8888;

var file = new nodeStatic.Server('./public');

function handler(request, response) {
  var url = request.url;
    file.serve(request, response);
  }


http.createServer(handler).listen(port);

console.log("node http server listening on http://localhost:" + port);
