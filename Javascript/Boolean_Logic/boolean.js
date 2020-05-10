var age = Number(prompt("What is your age?"));

if(age < 18){
    console.log("Sorry, you are not old enough to drink");
}
else if(age < 21){
    console.log("you can enter but not drink!");
}
else{
    console.log("Come on in and drink all the beer!");
}

// If age is negative
if(age < 0) {
    console.log("Come back once you're out of the womb");
}

// If age is 21
if(age === 21) {
    console.log("Happy 21st Birthday!");
}

// If age is odd
//(not evenly divisible by two)
if(age % 2 !== 0) {
    console.log("Your age is odd!");
}

// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}
