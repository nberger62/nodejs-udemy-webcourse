var express = require("express");
var app = express();
var request = require("request");


app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?apikey=[type]&", function(error, res){
        if(!err && response.statusCode == 200) {
            var results = JSON.parse(body)
            res.send(results["Search"][0]["Type"]);
        }
    });
});




app.listen(3000, function (){
    console.log("Movie app has started");
});