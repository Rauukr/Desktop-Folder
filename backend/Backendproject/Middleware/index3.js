import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

function loggar(req , res , next){
 console.log("Request method",req.method);
 console.log("Request URL" ,req.url);
 next();
}
app.use(loggar)

app.get("/", (req, res) => {
    res.send("Hello world!");
    });


app.listen(port, () => {
        console.log(`Listening on port ${port}`);
      });