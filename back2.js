import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName1 = "";
var bandName2 = "";


app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName1 = req.body["street"];
  bandName2 = req.body["pet"];

  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your street name is:</h1><p>${bandName1} </p> <h1> and your pet name id : </h1> <p>${bandName2}</p>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
