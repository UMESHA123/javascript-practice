//hoisitng let and const

// let x = 9;
// var y = 10;
// console.log(x)
// console.log(y)

// console.log(y)

// let x = 9;
// var y = 10;

// console.log(x)

//var is hoisted.

// if try to access the let x we get an error
//we get a error like con'nt acces the x before initilizig what it means that 
//js is know there is an x but it con'nt access it 
//but if try to acces the console.log(a)
//we get a error like a is not defined  so js is knows that a is not defined 

//let x is basicaly it stored in the temporal dead zone.
//basicaly the temporal deadzone is a time period from wehere var is hoisted and declered.


// console.log(x)
// let x = 9;
// var y = 10;
//it does not mean the varable let is not hoisted.


//debuging.
// console.log(y);
// console.log(x);
// let x = 10;
// var y = 19;

//here the x is also hoisted but in some other memory location 
// the y is hoisted in the global obj 

//if we move the console.log(x) after the let x = 10;

console.log(y);

let x = 10;
var y = 19;

console.log(x);

//now start debuging the x get a 10 
//the temporal dead zone start before the let x = 10 initilization and end 
// at when we initiliazed


//for example
//
// TDZ - start
//
// let x = 10; TDZ -end
//
//
//similary for const 


