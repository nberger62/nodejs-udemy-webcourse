var Person = {
        name: "Bill",
        age: 20,
        isnice: true,
        friends: ["Sally", "Joe"],
        speak: function(string){
            return " ";
        }
    }


/*
putting an array and a function in an object! the function is now a variable in the object!
*/

var comments = {};
comments.data = ["Good Job!", "Bye", "Lame..."];
function print(arr){
    arr.forEach(function(el){
        console.log(el);
    });
}

comments.print = function (){
    this.data.forEach(function(el){
        console.log(el);
    });
}