var colors = ["red", "orange", "yellow", "green"]

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(function(color){
    console.log("Your color is " + color);
});

/*
Your color is red
Your color is orange
Your color is yellow
Your color is green*/
