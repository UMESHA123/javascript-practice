//map and filters are the methods of the array.
//the map and filter are the examples of the higher order function.
//why because the map and filter are capable of taking function as an argument
//so the higher order function is a function it can take onother function 
//as a argument are return the onother function.

//for example

// const arr = [1,2,3,4,5,6];
// arr.map((element) => console.log(element));
//we can see in the above the map function taken the arrow function as a argument 

// arr.map((element) => console.log(element * 2));

arr = [1,2,3,4,5];
function getSquare(num){
    return num * 2;
}
const output = arr.map(getSquare);
console.log(output);
console.log(typeof output);//object

// arr.map((num) => num ** 2);
// arr.map((num) => {num ** 2});//all are undefined
// arr.map((num) => {return num ** 2});//all are 

//without map

// function displayArray(arr){
//     let newArray = [];
//     for(let element of arr){
//         newArray.push(element);
//     }
//     return newArray;
// }
// console.log(displayArray(arr));



// const arr = [1,2,3,4,5]
// function displayArray(arr){
//     let newArray = [];
//     for(let element of arr){
//         newArray.push(element*2);
//     }
//     return newArray;
// }
// console.log(displayArray(arr));