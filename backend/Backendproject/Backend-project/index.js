import express  from  "express";
const app =express();
const port = 3000;

app.get("/" , (req , res) =>{
    res.send("<h1>Home Page</h1>");
})
app.post("/register" , (req , res) =>{
    res.sendStatus(201);

})
app.put("/user/Raushan" , (req , res) =>{
    res.sendStatus(200);

})
app.patch("/user/Raushan" , (req , res) =>{
    res.sendStatus(200);

})
app.delete("/user/Raushan" , (req , res) =>{
    res.sendStatus(200);
});

app.listen(port , () => {
    console.log(`the server is running on ${port}.`);
});