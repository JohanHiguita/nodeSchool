//Use fs.createReadStream() to pipe the given file to process.stdout
const fs = require("fs");

const file = process.argv[2];

const readStream = fs.createReadStream(file);

//pipe
readStream.pipe(process.stdout)