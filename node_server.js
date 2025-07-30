 const http=require('node:http');
 http.createServer((req,resp)=>{

    resp.write("hello world");
    resp.end(); //here we need to end the response otherwise node js didn't understand where it need to be stop.

 }).listen(4500);
