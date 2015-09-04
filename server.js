var express = require ("express");
var server = express();

server.use(express.static(__dirname+""));

server.get("/", function(request, response){
    response.sendFile("html/index.html", {root:__dirname});
});

server.listen(8080, function(){
    console.log("The magic happens");
});