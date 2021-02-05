"use strict"; //means it will enforce things that javascript doesnt always enforce

const http = require("http");
const moment = require("moment");
//require is like 'import'

const port = 8888;

let i =0;

http.createServer((req, res) => {
                //status code,  //headers  -- plain text
    res.writeHead(200, {"Content-type": "text/plain"});
    res.write("standard date: ");
    res.write(new Date().toString());
    res.write("formatted date: "); 
    res.write(moment(new Date().toString()).format("dddd [at] h:mma"));
    res.end(); //closes the connection
}).listen(port); //telling the server to run on port 8888

console.log("Listening on port http://localhost:" + port);