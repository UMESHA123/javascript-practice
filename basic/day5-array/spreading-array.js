let nums = [1,2,3,4,5];
console.log(...nums);
console.log(nums);
//spread avide mutaion.

let num1 = [1,2,3,4];
let num2 = [5,6,7,8];
let num3 = [...num1,...num2];
console.log(num3);

let num4 = [...num1,...num2,4,5,6,7];
console.log(num4);