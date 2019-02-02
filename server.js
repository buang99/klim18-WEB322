/************************************************************************
*********
*  WEB
3
22: 
Assignment
1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy
.  
*  No part of this 
assignment has been copied manually or electronically from any other sour
ce
*  (including web sites) or 
distributed to other students.
* 
*  Name: KIRBY LIM Student ID: 131684177 Date: 2019-01-14
*
*  Online (Heroku) URL: https://young-wildwood-31958.herokuapp.com/
*
********************************************************************************/ 


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Kirby Lim - 131684177");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);