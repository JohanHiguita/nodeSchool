const mymodule = require("./mymodule.js");

const dir = process.argv[2];
const ext = process.argv[3];

mymodule(dir,ext, (err, data) => {
    if(err){
        console.error(err);
    }
    for (const file of data) {
        console.log(file);
    }
});