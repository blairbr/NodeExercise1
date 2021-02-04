"use strict"; //means it will enforce things that javascript doesnt always enforce

const http = require("http");
//require is like 'import'

const port = 8888;

let i =0;

http.createServer((req, res) => {
    i++;
                //status code,  //headers  -- plain text
    res.writeHead(200, {"Content-type": "text/plain"});
    res.write(<h1>"This is sent from a Node.js server \n" </h1>);
    res.write("You've visited " + i + " time(s).");
    res.end(); //closes the connection
}).listen(port); //telling the server to run on port 8888

console.log("Listening on port http://localhost:" + port);