const http =require('http');
const fs=require("fs");
const url=require("url");

const myServer=http.createServer((req,res)=>{
    if(req.url=== '/favicon.ico') return res.end();
    const log=`${Date.now()}: ${req.method} ${req.url} new request receive\n`;
    const myurl= url.parse(req.url);
    console.log(myurl);
    fs.appendFile('request.txt',log,(err,data)=>{
        switch(req.url)
        {
            case '/': res.end("home page");
            break;
            case '/about':res.end("about page");
            break;
            default:res.end("404");
        }

    })
    // console.log("new record");
    
});
myServer.listen(4501,()=>{console.log("started")});
