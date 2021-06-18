const http = require('http');
const through2  = require("through2");
const fs = require('fs');

const port = process.argv[2] || 3000;

const server = http.createServer(function (req, res) {
  
  if (req.method === 'POST') {
    req
    .pipe(through2(function (buffer, enc, next) {
        buffer = buffer.toString().toUpperCase();
       this.push(buffer)
       next()
    }))
    .pipe(res)
    .on('finish', () => {console.log("done!");})
    
  }else{
    res.end('Send POST\n')
  }
});
server.listen(port)