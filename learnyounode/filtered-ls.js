const fs = require("fs");
const path = require('path')


const dir = process.argv[2];
const ext = `.${process.argv[3]}`;
fs.readdir(dir, (error, list) => {
    if(error){
        console.error(error);
    }
    const filteredList = list.filter((file) => path.extname(file) == ext);
    for (const file of filteredList) {
        console.log(file);
    }
})

