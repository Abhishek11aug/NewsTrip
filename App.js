const express = require("express");
const axios = require("axios");
const App = express();
require('dotenv').config({path:__dirname+'/.env'});
App.listen(3000);
App.get("/", (req,res)=>{    
    res.sendFile("index.html",{root:__dirname});
});
App.get("/API",async (req,res)=>{
    let url = `https://newsapi.org/v2/everything?${req._parsedUrl.query}&apiKey=${process.env.APIKEY}`;
    r = await axios(url);
    e = r.data;
    res.json(e);
});