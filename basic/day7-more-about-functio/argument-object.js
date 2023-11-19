/**
 * argument object is a non arrow function
 * argument object is an array like object localy inside a function
 * and it cantaines values of all the arguments passed to a function
 */
// function calculatesum(a,b){
//     return a+b;
// }
// console.log(calculatesum(10,10));//no error  20 
// console.log(calculatesum(10,10,10,10,10,10));//no error 20 


//arguments

// function calculatesum(){
//     console.log(arguments)
// }
// calculatesum(10,10);//no error  20 
// calculatesum(10,10,10,10,10,10);//no error 20 


// function calculatesum(){
//     arguments[0] = 20;
//     console.log(arguments);
// }
// calculatesum(10,20,30,40,50);//no error  20 

// function calculatesum(){
//     for(let element of arguments){
//         console.log(element);
//     }
// }
// calculatesum(10,20,30,40,50);


// function calculatesum(){
//     for(let element of arguments){
//         console.log(element*2);
//     }
// }
// calculatesum(10,20,30,40,50);

// function calculatesum(){
//     let temp = []    
//     temp = [...arguments];
//     return temp
// }
// const result = calculatesum(10,20,30,40,50);
// console.log(result);

// function calculatesum(){
//     console.log(arguments.length);
// }
// calculatesum(10,20,30,40,50);
//so it is a array like object so we can from some array method not all the method some method

// function calculatesum(){
//     let total = 0;
//     for(let arg of arguments){
//         total += arg
//     }
//     return total;
// }
// const total = calculatesum(10,20,30,40,50);
// console.log(total);

// function fun(a = 10){
//     console.log(a);
// }

// fun();
// fun(20);


// function fun(a = 10){
//     console.log(a);
//     console.log(arguments);
//     arguments[0] = 100;
//     console.log(arguments)
//     console.log(a);//if argument updated the value is not updated.
// }
// fun(20);


function fun(a = 10){
    a = 100;
    console.log(arguments)
    console.log(a);//if argument updated the value is not updated.
}
fun(20);