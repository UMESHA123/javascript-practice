let nums = [1,2,3,4,5,6,7,8,9];

let even = nums.reduce((acc,cur) => cur % 2 == 0 ? {...acc, even: acc.even + cur} : {...acc, odd : acc.odd + cur},{even : 0, odd : 0});
console.log(even);