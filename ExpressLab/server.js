const express = require("express");
//create an instance of an Express server
const app = express();
const port = 4200;
app.listen(port, () => console.log(`Listening on port: ${port}.`));