let nums = [1,2,3,33,22,55,66,77,44,33,99];


const res = nums.reduce((acc,cur) => cur < 40 ? acc + cur : acc,0);
console.log(res);