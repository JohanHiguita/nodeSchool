const http = require('http');
const fs = require("fs");
const fileLocation = process.argv[3];

const server = http.createServer( (req, res) => {
    const src = fs.createReadStream(fileLocation);
    src.pipe(res); // pipes all of the data from the readable into response
    //The HTTP response object (res) is also a writable stream.
});

server.listen(process.argv[2]);