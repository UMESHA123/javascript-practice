let nums = [1,2,3,4,5];
console.log(nums)
console.log(nums.pop())
console.log(nums)

console.log(nums.slice(3,5))//it returns the shallow copy
console.log(nums)

let Name = "umesha";

console.log(Name.slice(0,1).toUpperCase() + Name.slice(1))

let arr = ["umesha","ramesh","ram","hugger"];
let newarr = arr.slice(0,arr.length+1);//shallow copy
console.log(newarr);

arr.splice(4,2)//start form 4 and delete next 2 item.
console.log(arr);

nums = [1,2,3,4,5,6,7,8,9];
nums.splice(3,2);//3 is the starting index 2 is the how many element to delet after the index 
console.log(nums);//5 6 are deleted

nums.splice(3);
console.log(nums)

nums.splice(1,3,1,2,3)
console.log(nums)
