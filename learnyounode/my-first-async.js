const fs = require("fs");

fs.readFile(process.argv[2], "utf8",(err,data) => {
    if (err) {
      return console.log(err);
    }
    const totalLines = data.split("\n").length - 1
    console.log(totalLines);
  });
