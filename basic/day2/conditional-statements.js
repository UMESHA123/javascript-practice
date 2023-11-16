let flag = true;

if(flag){
    console.log("hello");
}

if(flag){
    console.log("condition is true");
}else{
    console.log("the condition is false");
}

if(flag){
    console.log("inside first if");
    if(flag){
        console.log("inside 2nd if");
    }else{
        console.log("2nd if is false")
    }
}else{
    console.log("the first if is false");
}


let age = 20;
if(age>18){
    console.log("your are yonger ");
}else{
    console.log("your are not eligible");
}

const readlineSync = require("readline-sync");
let num1 = Number(readlineSync.question("enter a num1"));
let num2 = Number(readlineSync.question("enter a num2"));
console.log(num1+num2);


let num = readlineSync.question("enter a number");
if(num %3 == 0){
    console.log("fizz")
}else{
    console.log("buzz")
}

let flag1 = readlineSync.question("enter true/false")
let flag2 = readlineSync.question("enter true/false")
console.log(flag1 && flag2)
console.log(flag1 || flag2)
console.log(!flag1)