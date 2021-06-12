const http = require("http");

http.get(process.argv[2], (response) => {
    //response.setEncoding("utf8")
    let body = "";
    response.on("data", (data) => {
        body += data;
    });

    response.on("end", ()=>{
        const finalData = body.toString();
        console.log(finalData.length);
        console.log(finalData);
    })
}).on("error", (e) => console.error(e));