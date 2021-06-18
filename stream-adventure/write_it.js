const { Writable } = require("stream");

const myWritable = new Writable({
    write(chunk, encoding, cb) {
        console.log("writing:", chunk.toString());
        cb();
    }
});

/* process.stdin.on('data', (chunk) => {
    const res = myWritable.write(chunk);
}) */

process.stdin.pipe(myWritable);




  