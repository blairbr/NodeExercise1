//require the express module
const express = require("express");
//create an instance of an Express server
const app = express();
//define the port
const port = 4200;
//run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));

//health check
app.get("/healthCheck", (request, response) => {
    response.json("Healthcheck endpoint is working.")
})