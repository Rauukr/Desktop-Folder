import express from "express";


const app = express();
const port = 3000;


app.get("/" , (req , res) =>{
    const data= {
 title:"EJS Tags",
 seconds: new Date().getSeconds(),
 items: ["Apple", "Banana", "cherry"],
 htmlContent:"<strong>This is strong Text </strong>",
    };
    res.render("index.ejs",data);
});



app.listen(port , ()=>{
    console.log(`the server is running on port ${port}`);
});