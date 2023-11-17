let arr = []
// mutable arr and immutable arr
// mutable means like array
//immutable like string 
for(let i = 0;i<5;i++){
    arr.push(i);
}
console.log(arr);

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
console.log(arr1);
console.log(arr2);
let arr3 = arr1.concat(arr2);
console.log(arr3);

console.log(arr1.concat(arr2))

console.log(arr1+arr2);

console.log(arr3.length);
console.log(arr3.join("-"))
console.log(arr3.reverse())

let l1 = [1];
let l2 = [2];
let l3 = [3];
console.log(l1.concat(l2,l3))
console.log(arr3.pop())
console.log(arr3.unshift())
console.log(arr3.shift())
console.log(arr3)