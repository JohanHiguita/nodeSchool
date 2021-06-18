const through2  = require("through2");
let lineCounter = 0;
process.stdin
  .pipe(through2(function (buffer, enc, next) {
      lineCounter++;
      let returned;
      if(lineCounter % 2 == 0) {
        returned = buffer.toString().toUpperCase();
    }else {
        returned = buffer.toString().toLowerCase();
    }
    this.push(returned)    
    next()
   }))
  .pipe(process.stdout)
  .on('finish', () => {})