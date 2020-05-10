var express = require("express");
var app =express();

app.get("/", function(req, res){
   res.send("Hi There!");
});
app.get("/bye", function(req, res){
   res.send("Goodbye!");
});
app.get("/dog", function(req, res){
    console.log("Someone made a request for the dog page!")
    res.send("Woof Woof!");
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = (req.params.subredditName);
    res.send("Welcome to a sub Reddit!!!!!")
});

app.get("*", function(req, res){
    res.send("You are in BFE!")
});

app.listen(3000, function(){
   console.log("Run server")
});