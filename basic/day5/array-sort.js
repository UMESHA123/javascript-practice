let nums = [9,8,7,6,5,4,3,2,1]
nums.sort()
console.log(nums)

let fruites = ["banana","apple","orange",'yellow']
fruites.sort();
console.log(fruites);

nums = [3,4,5,23,2,2,45,7,8,9,7,6,9];
nums.sort()
console.log(nums);
//the sort function will first convert the num into string and based on the 
//utf16 encoding tecknic to sort the array.

function sortInAcs(a,b){
    return a-b;
}
nums = [3,4,5,23,2,2,45,7,8,9,7,6,9];
nums.sort(sortInAcs);
console.log(nums);

function sortInDes(a,b){
    return b-a;
}
nums = [3,4,5,23,2,2,45,7,8,9,7,6,9];
nums.sort(sortInDes);
console.log(nums);
