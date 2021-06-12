const http = require('http');
const url = require('url');
const server = http.createServer( (req, res) => {
    
    const q = url.parse(req.url, true);
    const pathname = q.pathname;
    const qdata = q.query;
    const result = {};
    if(req.method == "GET"){
        
        const iso = qdata["iso"];
        const date = new Date(iso);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        if(pathname == "/api/parsetime"){
            result.hour   = date.getHours();
            result.minute = date.getMinutes();
            result.second = date.getSeconds();
            
        }else if (pathname == "/api/unixtime"){
           result.unixtime = date.getTime();
        }
        
        res.end(JSON.stringify(result));   
    }
    


    /* console.log(req.url);
    res.write("eo");
    res.end() */;

    //const src = fs.createReadStream(fileLocation);
    //src.pipe(res); // pipes all of the data from the readable into response
    //The HTTP response object (res) is also a writable stream.
});

server.listen(process.argv[2]);