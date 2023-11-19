/**
 * higher order functions are the function which takes function as a orgument or 
 * return the function or does the both thing is called HOF
 */
// function outer(){
//     console.log("outer");
// }

//wrapper is a higher order function.
// function wrapper(outer){
//     outer();
//     function inner(){
//         console.log("inner function");
//     }
//     return inner;
// }

// const output = wrapper(outer);
// output();



//example:
//calculate square
function square(num){
    return num ** 2;
}

//claculate cube
function cube(num){
    return num ** 3;
}

//calculate fourth
function fourth(num){
    return num ** 4;
}


const arr = [1,2,3,4,5]; 
function claculatePower(wrapper,arr){
    let temp = [];
    for(let num of arr){
        temp.push(wrapper(num));
    }
    return temp;
}
const s_result = claculatePower(square,arr);
const c_result = claculatePower(cube,arr);
const f_result = claculatePower(fourth,arr);

console.log(s_result)
console.log(c_result)
console.log(f_result)
