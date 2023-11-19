//pure function 
/**
 * it takes the arguments
 * it should returns something
 * for some input we should get some output
 * the result not be infulenced by outer parameter
 * it should not be mutate the original arument 
 */
let x = 4;
function doubleValue(num){
    return num * 2 * x;
}
console.log(doubleValue(5));
//this isa impure function
//because the output of the function is totaly depences on the outer x value


//other example impure function.
// function appendArr(arr){
//     arr.push(10)//mutaing the arra
//     return arr;
// }
// let result = appendArr([1,2,3,4,5]);
// console.log(result)


//with out mutate pure function
// function appendArr(arr){ //arr is not mutated
//     let newArr = []
//     newArr.push(...arr,10);
//     return newArr;
// }
// let result = appendArr([1,2,3,4,5]);
// console.log(result)


//this is not a pure function

// let newArr = []
// function appendArr(arr){ //arr is not mutated
    
//     newArr.push(...arr,10);
//     return newArr;
// }
// let result = appendArr([1,2,3,4,5]);
// console.log(result)