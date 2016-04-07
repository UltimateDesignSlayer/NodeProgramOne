var http = require('http');
var event = require('events');
var fs = require('fs');
var ee = event.EventEmitter();

http.createServer(function(request,response){

  console.log(request);

  fs.readFile('html/index.html', function(e,data){
    if (e){
      console.log(e.stack);
      return false;
    }
    else{
      response.writeHead(200);
      response.write(data.toString());
    }

    response.end();
  });
}).listen(1234);

console.log('Server ready.');
