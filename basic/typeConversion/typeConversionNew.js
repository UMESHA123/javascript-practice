const a = '1';
const b = '0';
console.log(a+b);

console.log(Number(a)+Number(b));

//non empty string is always true
//"0" is also true
console.log(Boolean(a) && Boolean(b));

//String
let num = 10;
console.log(typeof String(num));

//Boolean
//empty string is false
//non empty string is true
console.log(Boolean(""));//false
console.log(Boolean("umesha"));//true
console.log(Boolean("0"));//true
console.log(Boolean(Number("0")));//false