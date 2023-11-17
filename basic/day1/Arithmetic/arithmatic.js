const x = 12;
const y = 12;
console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x*y);

var num1 = 12;
var num2 = "12";
console.log(num1 + num2); // otuptu 1212

console.log(num2 + num1);//1212
console.log(num2 * num1);//144
console.log(num2 / num1);//1
console.log(num2 - num1);//0
console.log(num2 % num1);//0

num1 = '1';
num2 = '1';
console.log(num2 + num1);//11
console.log(num2 * num1);//1
console.log(num2 / num1);//1
console.log(num2 - num1);//0
console.log(num2 % num1);//0

//power
console.log(num1 ** 2);//4 
num1 = 2;
var res = Math.pow(num1,4);
console.log("power")
console.log(res);

console.log("sqrt");
var res = Math.sqrt(num1,2);


console.log(res);



var name1 = "umesha";
var name2 = "umesha";

console.log(name1 + name2);//cancatination
console.log(name1 - name2);//Nan
console.log(name1 * name2);//Nan
console.log(name1 / name2);//Nan
console.log(name1 % name2);//Nan
console.log(name1 ** name2);//Nan