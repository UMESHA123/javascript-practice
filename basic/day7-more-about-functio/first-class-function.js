/**
 * in java script the function ar etriated as first class function
 * the first class function is: if function is assied to the variable, function can 
 * be passed to the other function or function can be returned by the other function
 * this basically called as a first class function.
 * if we assign the function to a varibale like a anonamous function 
 */

//case 1
// const fun = function(){
//     console.log("fun inside")
// }
// fun();

//case 2

// function wrapper(innerFun){//innerFun is a refernce of the innerFun() function
//     innerFun()
//     console.log("wrapper fun")
// }

// function innerFun(){
//     console.log("inner function");
// }

// wrapper(innerFun);


//case - 03

function great(){
    function display(){
        let firstname = "umesha"
        console.log(firstname+' hello');
    }
    return display; //returning the reference
}
console.log(great());
const output = great();
output();

great()();