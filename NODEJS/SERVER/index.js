//MAIN FILE FOR SERVERS

const http = require('http');
const fs =require('fs');

// append all the logs to a file called log.txt
//create a server that listens on port 8000
// and responds with ""herllo from serve"
const myServer = http.createServer((req, res) => {
    const log= `${Date.now()}: New request recieved\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        res.end("hello from server");
    })
});

myServer.listen(8000, () => console.log("server started!"));