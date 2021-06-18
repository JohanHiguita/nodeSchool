const concat = require('concat-stream');
const Readable = require('stream').Readable;

const writable = concat((data) => {
    
    const src = data
    .toString()
    .split("")
    .reverse()
    .join("");

    process.stdout.write(src)
    
})

process.stdin.pipe(writable);
