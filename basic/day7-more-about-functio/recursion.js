//factorial

// function fact(n){
//     if(n == 0){
//         return 1;
//     }
//     return n * fact(n-1)
// }

// const res = fact(4);
// console.log(res);


//sum of number

// function funSum(num){
//     if(num == 0){
//         return 1;
//     }
//     return num + funSum(num-1);
// }

// const res = funSum(10);
// console.log(res);

//fibonachi

function fib(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    return fib(n-1) + fib(n-2);
}
//0 1 1 2 3 5 8 13 ...
//1 1 2 3 4 5 6 7 
console.log(fib(6));