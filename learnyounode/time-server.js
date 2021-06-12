const net = require('net');
const moment = require("moment");

const server = net.createServer(function(socket) {
    socket.end(moment().format("YYYY-MM-DD hh:mm")+"\n");
});

server.listen(process.argv[2]);