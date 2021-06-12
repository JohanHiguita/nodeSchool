const fs = require("fs");

const bufferData = fs.readFileSync(process.argv[2]);

const totalLines = bufferData
    .toString()
    .split("\n")
    .filter((val) => val.trim() != "")
    .length

    console.log(totalLines - 1);