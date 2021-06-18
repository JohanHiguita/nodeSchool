const { Readable } = require("stream");
const { read } = require("fs");
const WebSocket = require("ws");


const ws = new WebSocket("ws://localhost:8099");
const duplex = WebSocket.createWebSocketStream(ws); //duplex

duplex.write("hello\n");
duplex.pipe(process.stdout);
