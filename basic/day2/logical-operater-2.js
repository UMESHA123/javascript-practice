
var firstName = "umesha";
var lastName = "ramesha";

if(firstName === ""){
    console.log(lastName);
}else{
    console.log(firstName);
}

//or
// "" string a false no empty string is a true value 
console.log(firstName || lastName);

console.log(Boolean(""))
console.log(Boolean("umesha"))
console.log(Boolean(" "))
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(null))
console.log(Boolean(undefined))
//"" null, undefined, 0 are the falsy value
//all other are truty value;


firstName = "";
lastName = null;
console.log(firstName || lastName);//shart circut
firstName = null;
lastName = null;
console.log(firstName || lastName);
firstName = undefined;
lastName = null;
console.log(firstName || lastName);
firstName = "";
lastName = undefined;
console.log(firstName || lastName);
firstName = null;
lastName = null;
console.log(firstName || lastName);
firstName = undefined;
lastName = undefined;
console.log(firstName || lastName);


let a = 12;
let b;
console.log(a+b)//NaN
//solve this problum
console.log(a+(b || 0))//12


firstName = "umesha";
lastName = "ramesha"
console.log(firstName && lastName)//lastname value(ramesha)
firstName = "";
lastName = "ramesha"
console.log(firstName && lastName)//empty output

console.log("umesha"  &&  null)//null


// or operater will first find the truthy value
// and operater wiil first find the falsy value
console.log(3||2||1)//3
console.log(null||0||1)//1
console.log(null||""||1)//1
console.log(null||""||undefined)//1


console.log(3&&2&&1)//1
console.log(null&&0&&1)//null
console.log(null&&""&&1)//null
console.log(""&&""&&undefined)//""