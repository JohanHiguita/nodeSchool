const through2  = require("through2");


process.stdin
  .pipe(through2(function (buffer, enc, next) {
     buffer = buffer.toString().toUpperCase();
 
    this.push(buffer)
 
    next()
   }))
  .pipe(process.stdout)
  .on('finish', () => {})






/* const stream = through(write, end)
process.stdin.pipe(stream).pipe(process.stdout)

function write (buffer, encoding, next) {
    this.push('I got some data: ' + buffer + '\n')
    next()
}

function end (done) {
    done()
} */