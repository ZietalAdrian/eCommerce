const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { port } = require("./app/config.js")
const apiRouter = require("./app/routes/api")

require("./app/db/mongoose")

app.use(bodyParser.json())

app.use("/", apiRouter)


app.listen(port, () => {
  console.log("serwer slucha... http://localhost:" + port);
});
