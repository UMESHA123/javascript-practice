let arr1 = [1,2,3,4];
let arr2 = arr1;

console.log("arr1-"+arr1);
console.log("arr2-"+arr2);

arr1.push(5);

console.log("arr1-"+arr1);
console.log("arr2-"+arr2);


//spread operater
let arr3 = [...arr1];

arr3.push(6);
console.log(arr1);
console.log(arr2);
console.log(arr3);

//or by using for loop
let arr4 = [1,2,3,4]
let arr5 = [];
for(let num of arr4){
    arr5.push(num);
}
console.log(arr5);

arr5.push(6)
console.log(arr4);
console.log(arr5);

let Name = "umesha";
strArr = [...Name];
console.log(strArr)