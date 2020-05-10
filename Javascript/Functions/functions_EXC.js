function isEven(num) {
    if(num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
/*
This function returns a number as true if it is even and returns false if it is odd
*/

function factorial(num){
    //define a result var
    var result = 1;
    //calculate factorial and store value in result
    for(var i = 1; i <= num; i++){
        result = result * i;
    }
    //return the result variable
    return result;
}
/*
This function returns a number as a result of a factorial*/


function kebabToSnake(str) {
    //replace all dashes with underscores
    var newStr = str.replace(/-/g , "_");
    //return str
    return newStr
}
kebabToSnake("hi-gf-ju-k")