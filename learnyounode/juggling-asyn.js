const http = require("http");

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

let totalResponses = 0;
const responses = [];

const validatesTotal = () => {
    if(totalResponses == 3){
        for (const r of responses) {
            console.log(r);
        }        
    }
} 

http.get(url1, (response) => {
 
    let body = "";
    response.on("data", (data) => {
        body += data;
    });

    response.on("end", ()=>{
        const finalData = body.toString();
        responses[0] = finalData;
        totalResponses++;
        validatesTotal();
    })
}).on("error", (e) => console.error(e));

http.get(url2, (response) => {
 
    let body = "";
    response.on("data", (data) => {
        body += data;
    });

    response.on("end", ()=>{
        const finalData = body.toString();
        responses[1] = finalData;
        totalResponses++;
        validatesTotal();
    })
}).on("error", (e) => console.error(e));

http.get(url3, (response) => {
 
    let body = "";
    response.on("data", (data) => {
        body += data;
    });

    response.on("end", ()=>{
        const finalData = body.toString();
        responses[2] = finalData;
        totalResponses++;
        validatesTotal();
        
    })
}).on("error", (e) => console.error(e));
