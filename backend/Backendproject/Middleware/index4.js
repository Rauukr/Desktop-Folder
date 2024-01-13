
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var badName = "";

app.use(express.urlencoded({ extended: true }));

function badNameGenerator(req , res , next){
    console.log(req.body);
    badName = req.body["stret"] + req.body["pet"];
    next(); 

}

app.use(badNameGenerator);

app.get("/", (req, res) => {
res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your bad name is: </h1> <h2>${badName}</h2>`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});