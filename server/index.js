const express = requires('express'); //import express
const axios = requires('axios');    //import axios

const serverApp = express();    
const port = process.env.PORT || 5000;

serverApp.get('/forecast/:lat,:lon', function (req, res)
{
    const url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`
    console.log(res);
    axios.get(url)
        .then( res => {
            response.status(200).json(res)
        })
        .catch( error => {
            response.status(500).json(error)
        });
});


serverApp.listen(port, () => {
    console.log(`Now listening on port ${port}.`)
})
