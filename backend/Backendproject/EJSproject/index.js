import express from "express";


const app = express();
const port = 3000;

app.get("/" , (req , res) => {
    const today = new Date("August 5 , 2023 11:30:00");
    const day = today.getDay();

    let type = "a weekday";
    let adv = "it is time to do hard work";

    if(day == 0 || day == 6){
        type= "a weekend";
        adv="it is time to do have fun";
    };

    // console.log(today);
    res.render("index.ejs", {
   dayType: type,
   advice: adv,
    });
});

app.listen(port , ()=>{
    console.log(`the server is running on port ${port}`);
});