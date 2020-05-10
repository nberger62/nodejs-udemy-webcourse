var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String,
});


var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB

var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Grouchy"
});

george.save(function(err, cat){
    if(err){
        console.log("Something Went Wrong!")
    } else {
        console.log("WE Just Saved A Cat to the DB:")
        console.log(cat);
    }
});

//retrieve all cats from the DB and console.log

Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no, error!");
        console.log(err);
    } else {
        console.log("All the cats!");
        console.log(cats);
    }
});