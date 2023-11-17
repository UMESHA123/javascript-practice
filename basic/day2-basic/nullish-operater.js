//nullish ??
let firstName = "umesha";
console.log(firstName)//umesha

firstName = "";

console.log(firstName)//""

firstName = null;
console.log(firstName ?? "namehidden")//namehidden
firstName = undefined;
console.log(firstName ?? "namehidden")//namehidden
firstName = 0;
console.log(firstName ?? "namehidden");//0
//nullish is used for null and undefined value only

firstName = "";
console.log(firstName ?? "namehidden");//""

let a = 12;
let b;
console.log(a || (b ?? 0))