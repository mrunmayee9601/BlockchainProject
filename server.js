const express = require("express");

const app = express();
const path = require('path')
app.use(express.static(__dirname+'/public'))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/home.html"));
})
app.get('/add_crops',function(req,res){
    res.sendFile(path.join(__dirname + "/add_crops.html"));
})
app.get('/transfer_crops',function(req,res){
    res.sendFile(path.join(__dirname + "/transfer_crops.html"));
})
app.get('/sales',function(req,res){
    res.sendFile(path.join(__dirname + "/sales.html"));
})

const server = app.listen(5000);
const portNumber = server.address().port;
console.log("server: "+ portNumber);