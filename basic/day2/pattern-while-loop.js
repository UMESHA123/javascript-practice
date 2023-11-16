// *
// **
// ***
let i = 1;
while(i<4){
    console.log("*".repeat(i))
    i++;
}

// ***
// **
// *
let j = 4;
while(i>0){
    console.log("*".repeat(i))
    i--;
}

let readlineSync = require("readline-sync");
let flag = true;
while(flag){
    let num = readlineSync.question("enter a number:");
    if(num > 50){
        flag = false;
    }
}