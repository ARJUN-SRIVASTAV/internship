const http = require('http');
const fs = require("fs");

// Server create karna
const myServer = http.createServer((req, res) => {
    const now = new Date();

    // IP address fetch karna
    const ip = req.socket.remoteAddress;

    // Format the log data
    const log = `
-------------------------------
Date       : ${now.toDateString()}
Time       : ${now.toLocaleTimeString()}
Day        : ${now.toLocaleString('en-IN', { weekday: 'long' })}
IP Address : ${ip}
URL        : ${req.url} //ye batata hai ki kis path pe request aayi hai
Method     : ${req.method}
Action     : New Request Received
-------------------------------\n`;

    // Log write karna
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.error("Error writing to log file", err);
            res.writeHead(500);
            res.end("Internal Server Error");
            return;
        }
        res.end("Hello from server");
    });
});

// Server run karna
myServer.listen(4500, () => {
    console.log("Server started on http://localhost:4500");
});
