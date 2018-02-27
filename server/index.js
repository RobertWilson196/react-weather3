const express = require('express'); //import express
const axios = require('axios');     //import axios

const serverApp = express();    
const port = process.env.PORT || 5000;

// read .env for API_KEY
require('dotenv').config();
const API_KEY = process.env.API_KEY;
console.log(API_KEY);  

serverApp.get('/forecast/:lat,:lon', function (req, res)
{
    // const url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`
    console.log(res);
    res.send('Hello World');
    // axios.get(url)
    //     .then( res => {
    //         response.status(200).json(res)
    //     })
    //     .catch( error => {
    //         response.status(500).json(error)
    //     });
});


serverApp.listen(port, () => {
    console.log(`Now listening on port ${port}.`)
});
