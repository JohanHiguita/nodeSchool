// Using bl package
const http = require("http");
const { BufferList } = require('bl')
const bl = new BufferList()
http.get(process.argv[2], (response) => {
    
    response.on("data", (data) => {
        bl.append(data)
    });

    response.on("end", () => {
        console.log(bl.length);
        console.log(bl.toString());
        bl = null;
    });
}).on("error", (e) => console.error(e));