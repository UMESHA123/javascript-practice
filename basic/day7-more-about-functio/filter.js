//with out filter

// const arr = [1,2,3,4,5,6,7,,9,10];

// function filterNum(arr){
//     const temp = [];
//     for(let num of arr){
//         if(num > 3){
//             temp.push(num);
//         }
//     }
//     return temp;
// }

// const result = filterNum(arr);
// console.log(result);


//with filter

const arr = [1,2,3,4,5,6,7,8,9,10];
const result = arr.filter((num) => {
    //not nesary
    // if(num > 3){
    //     console.log(num);
    //     return num;
    // }
    return num > 3;
})
console.log(result);

const output = arr.filter((num) => num > 3);
console.log(output);
