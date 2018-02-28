const express = require('express'); //import express
const axios = require('axios');     //import axios

const serverApp = express();    
const port = process.env.PORT || 5000;

// read .env for API_KEY
require('dotenv').config();
const API_KEY = process.env.API_KEY;
// console.log(API_KEY);  

serverApp.get('/forecast/:lat,:lon', function (request, response)
{
    const { lat, lon } = request.params;
    const url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`;

    console.log(lat);
    console.log(lon);
    
    axios.get(url)
        .then( res => {
            response.status(200).json(res.data.hourly);
            console.log(response);
        })
        .catch( error => {
            response.status(500).json(error)
            console.log(error);
        });
});


serverApp.listen(port, () => {
    console.log(`Now listening on port ${port}.`)
});
